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

class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path="/" component={Main}/>
          <Route path="/menu" component={SessionMenu}/>
          <Route path="/notes" component={Notes}/>
          <Route path="/session/add" component={AddSession}/>
          <Route path="/characters/add" component={AddCharacter}/>
          <Route exact path="/characters" component={Characters}/>
          <Route path="/characters/character" component={CharacterDetails} />
      </Router>
    );
  }
}

export default App;
