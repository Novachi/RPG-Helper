import React, { Component } from 'react';

class Main extends Component {
    render() {
      return (
        <div className="topContainer">
          <div className="centeredColumn">

            <div className="centeredRow">
              <div className={"menuBox" + " " + "centeredColumn"}>
                <h1 id="title">RPG-Helper</h1>
              </div>
              <div className={"menuBox" + " " + "centeredColumn"}>
                <div className="menuOption">
                  <label className="menuLabel">Choose session:</label>
                </div>
                <div className="menuOption">
                  <select id="sessionsDropdown">
                    <option className="options">opcja 1</option>
                    <option className="options">to jest opcja 2</option>
                    <option className="options">może opcja 3</option>
                  </select>
                </div>
                <div className="menuOption">
                  <label className="button"><a href="/menu">Accept</a></label>
                </div>
                <div className="menuOption">
                  <label className="menuLabel">Or add a new one:</label>
                </div>
                <div className="menuOption">
                  <label className="button"><a href="/session/add">Add session</a></label>
                </div>
              </div>
            </div>

          </div>
        </div>
      );
    }
  }

  export default Main;