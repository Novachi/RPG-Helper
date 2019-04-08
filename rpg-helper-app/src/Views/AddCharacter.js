import React, { Component } from 'react';

class StatInput extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className={"centeredColumn" + " " + "inputSpaceing"}>
        <label htmlFor="destinyPoints">{this.props.stat}:</label>
        <div className="centeredRow">
          <div className={"statBox" + " " + "centeredColumn"}>
            <i class="fas fa-minus"></i>
          </div>
          <input className={"inputField" + " " + "statBox"} type="text" id="destinyPoints"></input>
          <div className={"statBox" + " " + "centeredColumn"}>
              <i class="fas fa-plus"></i>
          </div>
          <div className={"statBox" + " " + "centeredColumn"}>
            <i class="fas fa-dice"></i>
          </div>
        </div>
      </div>
    );
  }
}


class AddCharacter extends Component {
  constructor(props){
    super(props);
    this.state =  {
      character: {
        name: "",
        race: "",
        sex: "",
        age: 0,
        height: 0,
        weight: 0,
        class: "",
        background: "",
        misc: "",
        closeCombat: 0,
        rangedCombat: 0,
        strength: 0,
        resilience: 0,
        agility: 0,
        inteligence: 0,
        mindStrength: 0,
        rhetoric: 0,
        health: 0,
        atackLimit: 0,
        luck: 0,
        magicPoints: 0,
        destinyPoints: 0,
        someStat_Wt: 0,
        madness: 0,
        exp: 0,
        gold: 0,
        inventory: {
          cap: 0,
          items: [],
          armour: [],
        },
        skills: [],
      }
    }

    this.handleFormInput = this.handleFormInput.bind(this);
  }

  handleFormInput(event){

  }


  render() {
    return (
        <div className="topContainer">
          <a href="/menu"><i class="fas fa-angle-left" id="goBackButton"></i></a>
            <div className="centeredTopRow">
              <h1>Add Character</h1>
            </div>
            <div className="centeredColumn">
              <div className="centeredRow">
                <form id="characterAdd">
                  <div className={"centeredRow" + " " + "wrap"}>
                    <div className={"centeredColumn" + " " + "formSection" + " " + "justifyTop"}>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="name">Name:</label>
                        <input className="inputField" type="text" id="name"></input>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="sex">Gender:</label>
                        <input className="inputField" type="text" id="sex"></input>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="age">Age:</label>
                        <input className="inputField" type="text" id="age"></input>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="Race">Race:</label>
                        <input className="inputField" type="text"></input>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="class">Class:</label>
                        <input className="inputField" type="text" id="class"></input>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="height">Height(cm):</label>
                        <input className="inputField" type="text" id="height"></input>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="weight">Weight(kg):</label>
                        <input className="inputField" type="text" id="weight"></input>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="gold">Gold:</label>
                        <input className="inputField" type="text" id="gold"></input>
                      </div>
                    </div>
                    <div className={"centeredColumn" + " " + "formSection" + " " + "justifyTop"}>
                      <StatInput stat="Destiny Points"/>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="closeCombat">Close combat skill:</label>
                        <input className="inputField" type="text" id="closeCombat"></input>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="rangedCombat">Ranged combat skill:</label>
                        <input className="inputField" type="text" id="rangedCombat"></input>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="strength">Strength:</label>
                        <input className="inputField" type="text" id="strength"></input>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="resilience">Resilience:</label>
                        <input className="inputField" type="text" id="resilience"></input>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="agility">Agility:</label>
                        <input className="inputField" type="text" id="agility"></input>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="inteligence">Inteligence:</label>
                        <input className="inputField" type="text" id="inteligence"></input>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="mindStrength">Mind strength:</label>
                        <input className="inputField" type="text" id="mindStrength"></input>
                      </div>
                    </div>
                    <div className={"centeredColumn" + " " + "formSection" + " " + "justifyTop"}>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="rhetoric">Rhetoric:</label>
                        <input className="inputField" type="text" id="rhetoric"></input>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="health">Health points:</label>
                        <input className="inputField" type="text" id="health"></input>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="attackLimit">Attack limit:</label>
                        <input className="inputField" type="text" id="attackLimit"></input>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="luck">Luck:</label>
                        <input className="inputField" type="text" id="luck"></input>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="magicPoints">Magic points:</label>
                        <input className="inputField" type="text" id="magicPoints"></input>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="someStat_Wt">someStat_Wt:</label>
                        <input className="inputField" type="text" id="someStat_Wt"></input>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="madness">Madness:</label>
                        <input className="inputField" type="text" id="madness"></input>
                      </div>
                      <div className={"centeredColumn" + " " + "inputButtonSpaceing"}>
                        <label className="button"><a href="#randomize">Randomize Stats</a></label>
                      </div>
                    </div>
                  </div>
                  <div className="centeredRow">
                    <div className={"centeredColumn" + " " + "textAreaSection" + " " + "inputSpaceing"}>
                        <label htmlFor="background">Background:</label>
                        <textarea className="detailsText" id="background"></textarea>
                    </div>
                    <div className={"centeredColumn" + " " + "textAreaSection" + " " + "inputSpaceing"}>
                        <label htmlFor="misc">Additional info:</label>
                        <textarea className="detailsText" id="misc"></textarea>
                    </div>
                  </div>
                  <div className="centeredRow">
                        <input className="submitButton" type="button" value="Add"></input>
                    </div>
                </form>
              </div>
            </div>
        </div>
      );
    }
  }



export default AddCharacter;