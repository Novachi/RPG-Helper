import React, { Component } from 'react';
import axios from 'axios';

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
      value = Math.floor(Math.random() * 41) + 10;
    }
    element.value = value > 0 ? value : 0;
    element.value = value < 100 ? value : 100;
  }

  render(){
    return(
      <div className={"centeredColumn" + " " + "inputSpaceing"}>
        <label htmlFor={this.props.stat}>{this.props.stat}:</label>
        <div className="statsRow">
          <div className={"statBox" + " " + "centeredColumn" + " " + "statChangeButton"} id={"-" + this.props.id} onClick={this.handleButtonChange}>
            <i className="fas fa-minus"></i>
          </div>
          <input name={this.props.id} className={"inputField" + " " + "statBox"} type="number" id={this.props.id} value="0"></input>
          <div className={"statBox" + " " + "centeredColumn" + " " + "statChangeButton"} id={"+" + this.props.id} onClick={this.handleButtonChange}>
              <i className="fas fa-plus"></i>
          </div>
          <div className={"statBox" + " " + "centeredColumn" + " " + "statChangeButton"} id={"r" + this.props.id} onClick={this.handleButtonChange}>
            <i className="fas fa-dice"></i>
          </div>
        </div>
      </div>
    );
  }
}

class SkillInput extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h3 className="skillName"><input type="checkbox" name="skills[]" value={this.props.skill != undefined ? this.props.skill.skillname : "WOW"}></input>{this.props.skill != undefined ? this.props.skill.skillname : "WOW"}</h3>
        <div><strong>Used stat:</strong> {this.props.skill != undefined ?this.props.skill.usedstat : "WOW"}</div>
        <div><strong>Details:</strong> {this.props.skill != undefined ?this.props.skill.details : "WOW"}</div>
        <div className="line"></div>
      </div>
    );
  }
}


class AddCharacter extends Component {
  constructor(props){
    super(props);
    this.state =  {
      character: {
        sessionId: parseInt(document.cookie.substring(8,9)),
        name: "",
        race: "",
        gender: "",
        age: 0,
        weaponSkill: 0,
        ballisticSkill: 0,
        strength: 0,
        toughness: 0,
        agility: 0,
        intelligence: 0,
        willPower: 0,
        fellowship: 0,
        attacks: 0,
        wounds: 0,
        strengthBonus: 0,
        toughnessBonus: 0,
        movement: 0,
        magic: 0,
        insanityPoints: 0,
        fatePoints: 0,
        experience: 0,
        gold: 0,
        imageSrc: "",
        background: "",
        additionalInfo: "",
        skills: [],
      },
      skills: [],
      skillCount: 0,
      statNames: ["Weapon Skill", "Ballistic Skill", "Strength", "Toughness", "Agility", "Intelligence", "Will Power", "Fellowship", "Wounds",
       "Attacks", "Magic", " Insanity Points", "Fate Points"],
      statIds: ["weaponSkill", "ballisticSkill", "strength", "toughness", "agility", "intelligence", "willPower", "fellowship", "wounds",
       "attacks", "magic", "insanityPoints", "fatePoints", "name", "gender", "age", "race", "class", "height", "weight", "gold", "background", "additionalInfo"],
    };
    this.handleRandomizeAllButton = this.handleRandomizeAllButton.bind(this);
  }

  createStatInputs = (start) => {
    let inputs = [];
    let stop = start===0 ? 7 : 13;
    for (let i = start; i < stop; i++) {
      inputs.push(<StatInput stat={this.state.statNames[i]} id={this.state.statIds[i]} />);
    }

    return inputs;
  };

  createSkillInputs = (start,stop) => {
    let skillInputs = [];
    for(let i = start; i < stop; i++){
      if(this.state.skills != undefined){
        skillInputs.push(<SkillInput skill={this.state.skills[i]} />);
      }
    }

    return skillInputs;
  };

  handleRandomizeAllButton(event){
    for(let i=0; i<13; i++){
      let val = Math.floor(Math.random() * 41) + 10;
      document.getElementById(this.state.statIds[i]).value = val;
    }
  }

  getSkills = async () => {
    let url='http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=getElements&tableName=skills';
    await axios.get(url)
      .then(res => {
        const data = res.data;
        this.setState({skills: data});
      });
  };

  getCharacter = () => {
    let url = "http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=getCharacter&characterId=" + this.props.match.params.id;
    axios.get(url).then((res) => this.setState({character: res.data[0]}));
  };

  getCharacterSkills = () => {
    let url = "http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=getSkills&characterId=" + this.props.match.params.id;
    axios.get(url).then((res) => this.setState({characterSkills: res.data}));
  };


  componentDidMount(){
    if(this.props.match.params.operation == "edit"){
      this.getCharacter();
      this.getCharacterSkills();
    }
    this.getSkills();
  }



  render() {
      console.log(this.props.nextCharacterId);
    return (
        <div className="topContainer">
          <a href="/menu"><i className="fas fa-angle-left" id="goBackButton"></i></a>
            <div className="centeredTopRow">
              <h1>Add Character to {this.props.sessionName}</h1>
            </div>
            <div className="centeredColumn">
              <div className="centeredRow">
                <form id="characterAdd" method="POST" action="http://v-ie.uek.krakow.pl/~s206775/addCharacter.php" encType="multipart/form-data">
                  <input id="sessionId" name="sessionId" type="hidden" value={this.props.sessionId}/>
                  <div className={"centeredRow" + " " + "wrap"}>
                    <div className={"centeredColumn" + " " + "formSection" + " " + "justifyTop"}>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="name">Name:</label>
                        <input name="name" className="inputField" type="text" id="name"/>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="sex">Gender:</label>
                        <input name="gender" className="inputField" type="text" id="gender"/>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="age">Age:</label>
                        <input name="age" className="inputField" type="text" id="age"/>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="Race">Race:</label>
                        <input name="race" className="inputField" type="text" id="race"/>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="class">Class:</label>
                        <input name="class" className="inputField" type="text" id="class"/>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="height">Height(cm):</label>
                        <input name="height" className="inputField" type="number" id="height"/>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="weight">Weight(kg):</label>
                        <input name="weight" className="inputField" type="number" id="weight"/>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="gold">Gold:</label>
                        <input name="gold" className="inputField" type="number" id="gold"/>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label htmlFor="player">Player:</label>
                        <input name="player" className="inputField" type="text" id="player"/>
                      </div>
                      <div className={"centeredColumn" + " " + "inputSpaceing"}>
                        <label>Character image(2MB):</label>
                        <input type="hidden" name="max_file_size" value="2000000"/>
                        <input type="file" name="imageSrc" id="imageSrc" accept=".png, .jpg, .jpeg"/>
                      </div>
                    </div>
                    <div className={"centeredColumn" + " " + "formSection" + " " + "justifyTop"}>
                      {this.createStatInputs(0)}
                    </div>
                    <div className={"centeredColumn" + " " + "formSection" + " " + "justifyTop"}>
                      {this.createStatInputs(7)}
                      <div className={"centeredColumn" + " " + "inputButtonSpaceing"}>
                        <label className="button" onClick={this.handleRandomizeAllButton}>Randomize Stats</label>
                      </div>
                    </div>
                  </div>
                  <div className="centeredRow">
                    <div className={"centeredColumn" + " " + "textAreaSection" + " " + "inputSpaceing"}>
                        <label htmlFor="background">Background:</label>
                        <textarea name="background" className="detailsText" id="background"></textarea>
                    </div>
                    <div className={"centeredColumn" + " " + "textAreaSection" + " " + "inputSpaceing"}>
                        <label htmlFor="misc">Additional info:</label>
                        <textarea name="additionalInfo" className="detailsText" id="additionalInfo"></textarea>
                    </div>
                  </div>
                  
                  <h1 className="skillName">Skills</h1>
                    <div className="centeredRow">
                        <div className={"centeredColumn"  + " " + "characterViewTopSection"}>
                            {this.createSkillInputs(0,Math.ceil(this.props.skillCount/2))}
                        </div>
                
                        <div className={"centeredColumn"  + " " + "characterViewTopSection"}>
                            {this.createSkillInputs(Math.ceil(this.props.skillCount/2),this.props.skillCount)}
                        </div>
                    </div>
                  <input type="hidden" name="characterId" value={this.props.nextCharacterId} />
                  <div className="centeredRow">
                        <input className="submitButton" type="submit" value="Add" onClick={this.handleAddButton}></input>
                  </div>
                </form>
              </div>
            </div>
        </div>
      );
    }
  }



export default AddCharacter;