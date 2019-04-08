import React, { Component } from 'react';


class AddSession extends Component {
    render() {
      return (
        <div className="topContainer">
            <a href="/"><i class="fas fa-angle-left" id="goBackButton"></i></a>
            <div className="centeredTopRow">
                <h1>Add New Session</h1>
            </div>
            <div className="centeredColumn">
                <div className="centeredRow">
                    <form className="addForm">
                        <div>
                            <label>Session Name:</label>
                            <br></br>
                            <input className="inputField" type="text"></input>
                        </div>
                        <div>
                            <input className="submitButton" type="button" value="Add"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      );
    }
  }



export default AddSession;