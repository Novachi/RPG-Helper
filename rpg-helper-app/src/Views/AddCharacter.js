import React, { Component } from 'react';

class StatInput extends Component {
  constructor(props){
    super(props);

    this.handleButtonChange = this.handleButtonChange.bind(this);
  }

  handleButtonChange(event){
    let id = event.currentTarget.id;
    let element = document.getElementById(id.substring(1));
    let value = 0;
    if(id.includes("+")){
      value = parseInt(element.value)+1;
    } else if(id.includes("-")) {
      value = parseInt(element.value)-1;
    } else {
      value = Math.floor(Math.random() * 60) + 1;
    }
    element.value = value > 0 ? value : 0;
  }

  render(){
    return(
      <div className={"centeredColumn" + " " + "inputSpaceing"}>
        <label htmlFor="destinyPoints">{this.props.stat}:</label>
        <div className="statsRow">
          <div className={"statBox" + " " + "centeredColumn" + " " + "statChangeButton"} id={"-" + this.props.id} onClick={this.handleButtonChange}>
            <i class="fas fa-minus"></i>
          </div>
          <input className={"inputField" + " " + "statBox"} type="text" id={this.props.id} value="0"></input>
          <div className={"statBox" + " " + "centeredColumn" + " " + "statChangeButton"} id={"+" + this.props.id} onClick={this.handleButtonChange}>
              <i class="fas fa-plus"></i>
          </div>
          <div className={"statBox" + " " + "centeredColumn" + " " + "statChangeButton"} id={"r" + this.props.id} onClick={this.handleButtonChange}>
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
    this.handleRandomizeAllButton = this.handleRandomizeAllButton.bind(this);
  }

  createStatInputs = (start) => {
    let statNames = ["Destiny Points", "Close Combat", "Ranged Combat", "Strength", "Resilience", "Agility", "Inteligence", "Mind Strength", "Rhetoric", "Health Points", "Attack limit", " Luck", "Magic Points", "WT", "Madness"];
    let inputs = []
    let stop = start===0 ? 8 : 15;
    let id = start;

    for (let i = start; i < stop; i++) {
      inputs.push(<StatInput stat={statNames[i]} id={id} />);
      id++;
    }

    return inputs;
  }

  handleFormInput(event){

  }

  handleRandomizeAllButton(event){
    for(let i=0; i<15; i++){
      let val = Math.floor(Math.random() * 60) + 1;
      document.getElementById(i).value = val;
    }
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
                      {this.createStatInputs(0)}
                    </div>
                    <div className={"centeredColumn" + " " + "formSection" + " " + "justifyTop"}>
                      {this.createStatInputs(8)}
                      <div className={"centeredColumn" + " " + "inputButtonSpaceing"}>
                        <label className="button" onClick={this.handleRandomizeAllButton}>Randomize Stats</label>
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
                  <h1 className="skillName">Skills</h1>
                    <div className="centeredRow">
                        <div className={"centeredColumn"  + " " + "characterViewTopSection"}>
                            <div>
                                <h3 className="skillName"><input type="checkbox" name="skills"></input>Rozpierdalanie</h3>
                                <div><strong>Used stat:</strong> WS</div>
                                <div><strong>Details:</strong> Pozwala na rozpierdalanie przeciwnika, bo tak!</div>
                                <div className="line"></div>
                            </div>
                            <div>
                                <h3 className="skillName"><input type="checkbox" name="skills"></input>Rozpierdalanie</h3>
                                <div><strong>Used stat:</strong> WS</div>
                                <div><strong>Details:</strong> Pozwala na rozpierdalanie przeciwnika, bo tak!</div>
                                <div className="line"></div>
                            </div>
                        </div>
                
                        <div className={"centeredColumn"  + " " + "characterViewTopSection"}>
                            <div>
                                <h3 className="skillName"><input type="checkbox" name="skills"></input>Rozpierdalanie</h3>
                                <div><strong>Used stat:</strong> WS</div>
                                <div><strong>Details:</strong> Pozwala na rozpierdalanie przeciwnika, bo tak!  Pozwala na rozpierdalanie przeciwnika, bo tak!  Pozwala na rozpierdalanie przeciwnika, bo tak!  Pozwala na rozpierdalanie przeciwnika, bo tak!</div>
                                <div className="line"></div>
                            </div>
                            <div>
                                <h3 className="skillName"><input type="checkbox" name="skills"></input>Rozpierdalanie</h3>
                                <div><strong>Used stat:</strong> WS</div>
                                <div><strong>Details:</strong> Pozwala na rozpierdalanie przeciwnika, bo tak!</div>
                                <div className="line"></div>
                            </div>
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