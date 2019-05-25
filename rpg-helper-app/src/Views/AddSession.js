import React, { Component } from 'react';
import axios from 'axios';


class AddSession extends Component {

    // createSession = () => {
    //     setTimeout(() => {
    //         let input = document.querySelector("#sessionInput");
    //         input.value = "";
    //         alert("Sesja dodana!");
    //     }, 500);
    // }


    render() {
      return (
        <div className="topContainer">
            <a href="/"><i className="fas fa-angle-left" id="goBackButton"></i></a>
            <div className="centeredTopRow">
                <h1>Add New Session</h1>
            </div>
            <div className="centeredColumn">
                <div className="centeredRow">
                    <form className="addForm" id="addForm" method="POST" action="http://v-ie.uek.krakow.pl/~s206775/addSession.php">
                        <div>
                            <label>Session Name:</label>
                            <br></br>
                            <input id="sessionInput" className="inputField" type="text" name="sessionName"></input>
                        </div>
                        <div>
                            <input className="submitButton" type="submit" value="Add"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      );
    }
  }



export default AddSession;