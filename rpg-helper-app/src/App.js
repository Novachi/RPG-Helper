import React, { Component } from 'react';
import './new.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './Views/Main';
import SessionMenu from './Views/SessionMenu';
import Notes from './Views/Notes';
import AddSession from './Views/AddSession';
import Characters from './Views/Characters';
import AddCharacter from './Views/AddCharacter';
import CharacterDetails from './Views/CharacterDetails';
import axios from 'axios';
import AddNote from './Views/AddNote';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      skillCount: 0,
      characterCount: 0,
      notesCount: 0,
      nextCharacterId: 1,
      nextNoteId: 1,
      requestsData: [],
      nextScreen: ""
    }
    this.arr = [];
  }

  sendRequest = async (url) => {
    let data;
    try {
       await axios.get(url)
      .then(res => {
        data = res.data
        this.arr.push(data);
      });
    } catch(err){
      console.log(err);
    }
  }

  getAllData = async () => {
    let urls = ["http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=getRecordCount&tableName=skills",
            "http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=getRecordCount&tableName=characters",
            "http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=getRecordCount&tableName=notes",
            "http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=getLastId&tableName=notes",
            "http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=getLastId&tableName=characters"
            ];

     for(let i=0; i<urls.length; i++){
       await this.sendRequest(urls[i]);
     }
  }
  


  componentDidMount(){
   this.getAllData().then(() => this.setState({requestsData: this.arr}));
  }

  render() {
    if(this.state.requestsData[0] != undefined){
      var skillsNumber = this.state.requestsData[0][0].count;
      var charactersNumber = this.state.requestsData[1][0].count;
      var notesNumber = this.state.requestsData[2][0].count;
      var followingNoteId = this.state.requestsData[3][0].max == null ? 1 : this.state.requestsData[3][0].max;
      var followingCharacterId = this.state.requestsData[4][0].max == null ? 1 : this.state.requestsData[4][0].max+1;
    }

      let regex = /session=\d+/g;
      let sessionId = parseInt(document.cookie.match(regex)[0].substring(8));
    
    return (
      <Router>
          <Route exact path="/" component={Main}/>
          <Route
              path='/menu'
              render={(props) => <SessionMenu {...props} nextCharacterId={followingCharacterId} />}
          />
          {/*<Route path="/menu" component={() => <SessionMenu />} />*/}
          {/*<Route path="/menu" component={SessionMenu}/>*/}
          <Route exact path="/notes" component={() => <Notes notesCount={notesNumber} nextNoteId={followingNoteId} sessionId={sessionId}/>}/>
          <Route path="/session/add" component={AddSession}/>
          <Route path="/characters/:operation/:characterId" component={() => <AddCharacter nextCharacterId={followingCharacterId} skillCount={skillsNumber}/>}/>
          <Route exact path="/characters" component={() => <Characters characterCount={charactersNumber} />}/>
          <Route path="/characters/show/:characterId" component={CharacterDetails} />
          <Route path="/notes/:operation/:id" component={AddNote} />
      </Router>
    );
  }
}

export default App;
