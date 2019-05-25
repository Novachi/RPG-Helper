import React, { Component } from 'react';

class Note extends Component{
    render(){
        return(
            <div className="note">
                <div>
                        <h3 className="date">{this.props.date}</h3>
                </div>
                <div className="editField">
                    <a class="editButton" href={"/notes/edit/" + this.props.id}>Edit</a>
                </div>
                <div>
                    <p><span className="tab"> </span>{this.props.note}</p>
                </div>
            </div>
        );
    }
}

class Notes extends Component {


    createNotes = () => {
        let notes = []
        for(let i=0; i<10; i++){
            notes.push(<Note id={i} date="22.01.2019 22:22" note="Jarek poszedl po piwo i kupil dwa zamiast jednego Jarek poszedl po piwo i kupil dwa zamiast jednego Jarek poszedl po piwo i kupil dwa zamiast jednego Jarek poszedl po piwo i kupil dwa zamiast jednego Jarek poszedl po piwo i kupil dwa zamiast jednego"/>);
        }

        return notes;
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
                        <a id="addButton" class="editButton" href={"/notes/add/" + this.props.nextNoteId}>Add New Note</a>
                    </div>

                </div>
        );
    }
}

export default Notes;