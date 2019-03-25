import React, {Component} from 'react';

class SessionMenu extends Component {
    render() {
      return (
        <div className="screen">
          <div className="main-container">
            <div className="main-box">
              <h1 id="title">Session</h1>
            </div>
            <div className="main-box">
              <div className="second-box">
                <label className="button"><a href="/character/add">Add character</a></label>
              </div>
              <div className="second-box">
                <label className="button"><a href="/characters">Show all characters</a></label>
              </div>
              <div className="second-box">
                <label className="button"><a href="/notes">Show notes</a></label>
              </div>
              <div className="second-box">
                <label className="button"><a href="/">Change session</a></label>
              </div>
            </div>
          </div>
      </div>
      );
    }
  }

  export default SessionMenu;