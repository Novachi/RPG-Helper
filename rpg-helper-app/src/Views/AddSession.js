import React, { Component } from 'react';
import axios from 'axios';


class AddSession extends Component {

    createSession = () => {
        let name = document.querySelector("#sessionInput").value;
        const url='http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=addSession&sessionName=' + name;
        console.log(url);
        axios.get(url);
    }

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
                            <input id="sessionInput" className="inputField" type="text"></input>
                        </div>
                        <div>
                            <input className="submitButton" type="button" value="Add" onClick={this.createSession}></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      );
    }
  }



export default AddSession;