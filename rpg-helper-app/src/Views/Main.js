import React, { Component } from 'react';

class Main extends Component {
    render() {
      return (
        <div className="screen">
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
                <label className="button"><a href="/menu">Accept</a></label>
              </div>
              <div className="second-box">
                <label className="label">Or add a new one:</label>
              </div>
              <div className="second-box">
                <label className="button"><a href="/add/session">Add session</a></label>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  export default Main;