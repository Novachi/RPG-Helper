import React, { Component } from 'react';

class AddNote extends Component{
    render(){
        let operation = this.props.match.params.operation;
        return(
            <div className="topContainer">
            <a href="/notes"><i class="fas fa-angle-left" id="goBackButton"></i></a>
            <div className="centeredTopRow">
                <h1>Add New Note to {document.cookie.substring(10)}</h1>
            </div>
            <div className="centeredColumn">
                <div className="centeredRow">
                    <form className="addForm" method="POST" action="http://v-ie.uek.krakow.pl/~s206775/addEditNote.php">
                        <div>
                            <label>Note:</label>
                            <br></br>
                            <textarea id="noteInput" name="note"></textarea>
                        </div>
                        <input type="hidden" name="id" value={this.props.match.params.id} />
                        <input type="hidden" name="operation" value={operation} />
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

export default AddNote;