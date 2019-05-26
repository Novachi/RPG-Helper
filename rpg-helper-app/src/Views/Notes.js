import React, { Component } from 'react';
import axios from "axios";

class Note extends Component{
    render(){
        return(
            <div className="note">
                <div>
                        <h3 className="date">{this.props.date}</h3>
                </div>
                <div className="editField">
                    <a className="editButton" href={"/notes/edit/" + this.props.id}>Edit</a>
                </div>
                <div>
                    <p><span className="tab"> </span>{this.props.note}</p>
                </div>
            </div>
        );
    }
}

class Notes extends Component {

    constructor(props){
        super(props);
        this.state = {
            notes:[],
        }
    }


    getNotes = async () => {
        let url='http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=getNotes&sessionId=' + this.props.sessionId;
        await axios.get(url)
            .then(res => {
                const data = res.data;
                this.setState({notes: data});
            });
    };


    createNotes = () => {
        let notes = [];
        for(let i=0; i<this.props.notesCount; i++){
            if(this.state.notes[i] != undefined) {
                notes.push(<Note id={this.state.notes[i].noteid} date={this.state.notes[i].notedate.substring(0,16)}
                                 note={this.state.notes[i].note}/>);
            }
        }

        return notes;
    };

    componentDidMount() {
        this.getNotes();
    }

    render(){
        return(
                <div className="topContainer">
                    <a href="/menu"><i className="fas fa-angle-left" id="goBackButton"></i></a>

                    <div className="centeredTopRow">
                            <h1>{document.cookie.substring(10)}</h1>
                    </div>

                    <div className="centeredColumn">
                        {this.createNotes()}
                    </div>

                    <div className="addField">
                        <a id="addButton" className="editButton" href={"/notes/add/" + (this.props.nextNoteId +1)}>Add New Note</a>
                    </div>

                </div>
        );
    }
}

export default Notes;