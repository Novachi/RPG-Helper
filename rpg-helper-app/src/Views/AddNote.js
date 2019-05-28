import React, { Component } from 'react';
import axios from "axios";

class AddNote extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    getNote = async () => {
        let url='http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=getNote&noteId=' + this.props.match.params.id;
        console.log(url);
        await axios.get(url)
            .then(res => {
                const data = res.data;
                this.setState({note: data[0].note});
            });
    };


    componentDidMount() {
        if(this.props.match.params.operation === "edit"){
            this.getNote();
        }
    }

    render(){
        if(this.state.note != undefined){
            document.getElementById("noteInput").value = this.state.note;
        }
        let operation = this.props.match.params.operation;
        let regex = /session=\d+/g;
        let sessionId = parseInt(document.cookie.match(regex)[0].substring(8));
        return(
            <div className="topContainer">
            <a href="/notes"><i className="fas fa-angle-left" id="goBackButton"></i></a>
            <div className="centeredTopRow">
                <h1>{operation == "edit" ? "Edit note of" : "Add New Note to"} {document.cookie.substring(10)}</h1>
            </div>
            <div className="centeredColumn">
                <div className="centeredRow">
                    <form className="addForm" method="POST" action="http://v-ie.uek.krakow.pl/~s206775/addEditNote.php">
                        <div>
                            <label>Note:</label>
                            <br></br>
                            <textarea id="noteInput" name="note"></textarea>
                        </div>
                        <input type="hidden" name="sessionId" value={sessionId}/>
                        <input type="hidden" name="noteId" value={this.props.match.params.id} />
                        <input type="hidden" name="operation" value={operation} />
                        <div>
                            <input className="submitButton" type="submit" value="Add" onClick={this.createSession}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default AddNote;