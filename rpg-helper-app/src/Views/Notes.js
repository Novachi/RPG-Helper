import React, { Component } from 'react';
import axios from "axios";

class Note extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    deleteNote = () =>{
        let url='http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=deleteNote&noteId=' + this.props.id;
        axios.get(url).then(() => this.props.reload());

    };

    render(){
        return(
            <div className="note">
                <div>
                        <h3 className="date">{this.props.date}</h3>
                </div>
                <div className="editField">
                    <button className="editButton"><a href={"/notes/edit/" + this.props.id}><i className="fas fa-edit"></i></a></button>
                    <button className="editButton" onClick={this.deleteNote}><i className="fas fa-trash-alt"></i></button>
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
        };

        this.reload = this.reload.bind(this);
    }

    reload(){
        this.getNotes();
    };

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
                                 note={this.state.notes[i].note} reload={this.reload}/>);
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
                            <h1>{this.props.sessionName}</h1>
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