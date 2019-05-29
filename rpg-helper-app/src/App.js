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
import AddItem from './Views/AddItem';

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
  };

  getAllData = async () => {
    let urls = ["http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=getRecordCount&tableName=skills",
            "http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=getRecordCount&tableName=characters",
            "http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=getRecordCount&tableName=notes",
            "http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=getLastId&tableName=notes",
            "http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=getLastId&tableName=characters",
            "http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=getLastId&tableName=items"
            ];

     for(let i=0; i<urls.length; i++){
       await this.sendRequest(urls[i]);
     }
  };
  


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
      var followingItemId = this.state.requestsData[5][0].max == null ? 1 : this.state.requestsData[5][0].max+1;
    }

        let sessionId = 1;
        let sessionName = "";
        if(document.cookie != ""){
          let regex = /session=\d+/g;
          sessionId = parseInt(document.cookie.match(regex)[0].substring(8));
          regex = /(?<=\d+:).+/g;
           sessionName = document.cookie.match(regex)[0];
        }
    
    return (
      <Router>
          <Route exact path="/" component={Main}/>
          <Route
              path='/menu'
              render={(props) => <SessionMenu {...props} nextCharacterId={followingCharacterId} sessionName={sessionName}/>}
          />
          <Route exact path="/notes" component={() => <Notes notesCount={notesNumber} nextNoteId={followingNoteId} sessionId={sessionId} sessionName={sessionName}/>}/>
          <Route path="/session/add" component={AddSession}/>
          <Route exact path="/characters/:operation/:characterId" component={(props) => <AddCharacter {...props} nextCharacterId={followingCharacterId} sessionId={sessionId} skillCount={skillsNumber} sessionName={sessionName}/>}/>
          <Route exact path="/characters" component={(props) => <Characters {...props} characterCount={charactersNumber} sessionId={sessionId} sessionName={sessionName}/>}/>
          <Route exact path="/characters/:id" component={(props) => <CharacterDetails {...props} skillCount={skillsNumber} />} />
          <Route path="/notes/:operation/:id" component={AddNote} />
          <Route exact path="/characters/:id/items/add" render={(props) => <AddItem {...props} nextItemId={followingItemId} />} />
      </Router>
    );
  }
}

export default App;
