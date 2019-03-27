import React, {Component} from 'react';

class SessionMenu extends Component {
    render() {
      return (
        <div className="topContainer">
          <div className="centeredColumn">
            <div className="centeredRow">
              <div className={"menuBox" + " " + "centeredColumn"}>
                <h1 id="title">Session</h1>
              </div>
              <div className={"menuBox" + " " + "centeredColumn"}>
                <div className="menuOption">
                  <label className="button"><a href="/character/add">Add character</a></label>
                </div>
                <div className="menuOption">
                  <label className="button"><a href="/characters">Show all characters</a></label>
                </div>
                <div className="menuOption">
                  <label className="button"><a href="/notes">Show notes</a></label>
                </div>
                <div className="menuOption">
                  <label className="button"><a href="/">Change session</a></label>
                </div>
              </div>
            </div>
          </div>
      </div>
      );
    }
  }

  export default SessionMenu;