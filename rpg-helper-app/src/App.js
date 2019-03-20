import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


class AddSession extends Component {
  render() {
    return (
      <h1>Dodaj se</h1>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="main-box">
          <h1 id="title">RPG-Helper</h1>
        </div>
        <div className="main-box">
          <div className="second-box">
            <label className="label">Choose session:</label>
          </div>
          <div className="second-box">
            <select id="sessionsDropdown">
              <option className="options">opcja 1</option>
              <option className="options">to jest opcja 2</option>
              <option className="options">może opcja 3</option>
            </select>
          </div>
          <div className="second-box">
            <label className="button"><a href="#">Accept</a></label>
          </div>
          <div className="second-box">
            <label className="label">Or add a new one:</label>
          </div>
          <div className="second-box">
            <label className="button"><a href="/add/session">Add session</a></label>
          </div>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main}/>
          <Route path="/add/session" component={AddSession}/>
        </div>
      </Router>
    );
  }
}

export default App;
