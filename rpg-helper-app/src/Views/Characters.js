import React, { Component } from 'react';
import axios from "axios";

class Character extends Component {

    deleteCharacter = () =>{
        let url='http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=deleteCharacter&characterId=' + this.props.id;
        axios.get(url).then(() => this.props.reload());

    };

    render(){
        return (
            <div className={"centeredRow" + " " + "characterBox"}>
                <div className={ "centeredColumn" + " " + "section"}>
                    <img className="ryj" src={this.props.imageSrc} width="150px" height="150px" alt="Character's ryj"/>
                </div>
                <div className={ "centeredColumn" + " " + "section"}>
                    <div className="sectionItem">Name: {this.props.name}</div>
                    <div className="sectionItem">Race: {this.props.race}</div>
                    <div className="sectionItem">Class: {this.props.class}</div>
                </div>
                <div className={ "centeredColumn" + " " + "section"}>
                    <div className="sectionItem">Gender: {this.props.gender}</div>
                    <div className="sectionItem">Available Exp: {this.props.exp}</div>
                    <div className="sectionItem">Gold: {this.props.gold}</div>
                </div>
                <div className={ "centeredColumn" + " " + "section"}>
                    <div className="sectionItem"><label className="button"><a href={"/characters/" + this.props.id}>Details</a></label></div>
                    <div className="sectionItem"><label className="button" onClick={this.deleteCharacter}>Delete</label></div>
                </div>
            </div>
        );
    }
}


class Characters extends Component {

    constructor(props){
        super(props);
        this.state = {
            characters: [],
        }

        this.reload = this.reload.bind(this);
    }

    reload(){
        this.getCharacters();
    };

    createCharacterFields = () => {
        let fields = [];
        for(let i=0; i<this.props.characterCount; i++){
            if(this.state.characters[i] != undefined) {
                fields.push(<Character id={this.state.characters[i].characterid} name={this.state.characters[i].name}
                                 race={this.state.characters[i].race} class={this.state.characters[i].characterclass}
                                 gender={this.state.characters[i].gender} exp={this.state.characters[i].experience}
                                 gold={this.state.characters[i].gold} imageSrc={this.state.characters[i].imagesrc} reload={this.reload}/>);
            }
        }

        return fields;
    };

    getCharacters = () => {
        let url='http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=getCharacters&sessionId=' + this.props.sessionId;
        axios.get(url)
            .then(res => {
                const data = res.data;
                this.setState({characters: data});
                console.log(this.state.characters[0]);
            });
    };

    componentDidMount() {
        this.getCharacters();

    }

    render() {
      return (
          
        <div className="topContainer">
                <a href="/menu"><i class="fas fa-angle-left" id="goBackButton"></i></a>
                <div className="centeredTopRow">
                    <h1>{document.cookie.substring(10)} - Characters</h1>
                </div>
                <div className="centeredColumn">
                    {this.createCharacterFields()}
                </div>
                
        </div>
      );
    }
  }



export default Characters;