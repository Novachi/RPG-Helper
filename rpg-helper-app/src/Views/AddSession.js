import React, { Component } from 'react';


class AddSession extends Component {
    render() {
      return (
        <div className="screen">
            <div className="main-container">
                <div className="main-box">
                    <div className="second-box">
                        <h1>Add New Session</h1>
                    </div>
                    <form className="addForm">
                        <div className="second-box">
                            <label>Session Name:</label>
                            <br></br>
                            <input className="inputField" type="text"></input>
                        </div>
                        <div className="second-box">
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