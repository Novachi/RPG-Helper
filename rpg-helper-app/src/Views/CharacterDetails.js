import React, { Component } from 'react';
import axios from 'axios';

class Skill extends Component{

    render() {
        return(
            <div>
                <h3 className="skillName">{this.props.skill.skillname}</h3>
                <div><strong>Level:</strong> {this.props.skill.currentlevel}/{this.props.skill.maxlevel}</div>
                <div><strong>Used stat:</strong> {this.props.skill.usedstat}</div>
                <div><strong>Details:</strong> {this.props.skill.details}</div>
                <div className="line"></div>
            </div>
        );
    }
}

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
            items:[{itemName: "Siekierka rozpierdolu", atk:"21", def: "32", weight: "500", details: "Rozpierdalacz to bron, co rozpierdala."}]
        }
    }

    render() {
        return(
            <div>
                <div className="item">
                    <div className={"unchangableRow" + " " + "flexStart"}>
                        <p>{this.state.items[0].itemName}</p>
                        <div className="deleteItem">
                            <i class="fas fa-minus"></i>
                        </div>
                    </div>
                    <div className="details">
                        <p className="itemStats">
                            <span className="itemAtk">Atk:<span>{this.state.items[0].atk}</span> | </span>
                            <span className="itemDef">Def:<span>{this.state.items[0].def}</span> | </span>
                            Weight: <span>{this.state.items[0].weight}</span> kg
                        </p>
                        <p>{this.state.items[0].details}</p>
                    </div>
                </div>
                <div className="line"></div>
            </div>
        );
    }
}

class StatSection extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let id = "";
        let stat;
        if(this.props.character != undefined) {
            id = this.props.statId;
            stat = this.props.character[id];

        }
        return(
            <div className="statsRow">
                <div className={"statBox" + " " + "centeredColumn"}>{this.props.stat}</div>
                <div className={"statBox" + " " + "centeredColumn" + " " + "hide"}>
                    <i class="fas fa-minus"></i>
                </div>
                <div className={"statBox" + " " + "centeredColumn"}>{stat}</div>
                <div className={"statBox" + " " + "centeredColumn" + " " + "hide"}>
                    <i class="fas fa-plus"></i>
                </div>
            </div>
        );
    }
}

class CharacterDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            character: {},
        }
    }

    createStats = () => {
        let statNames = ["WS", "BS", "S", "T", "AG", "INT", "WP", "FEL", "A", "W", "SB", "TB", "M", "MAG", "IP", "FP"];
        let statIds = ["weaponskill", "ballisticskill", "strength", "toughness", "agility", "intelligence", "willpower", "fellowship", "attacks", "wounds",
            "strengthbonus","toughnessbonus","movement", "magic", "insanitypoints", "fatepoints"];
        let stats = [];
        for(let i=0; i<16; i++){
            stats.push(<StatSection stat={statNames[i]} character={this.state.character} statId={statIds[i]}/>);
        }

        return stats;
    };

    createSkills = (start, stop) => {
        let skills = [];
        for(let i=start; i<stop; i++){
            skills.push(<Skill skill={this.state.skills[i]}/>);
        }

        return skills;
    };

    getCharacter = () => {
        let url = "http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=getCharacter&characterId=" + this.props.match.params.id;
        axios.get(url).then((res) => this.setState({character: res.data[0]}));
    };

    getSkills = () => {
        let url = "http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=getSkills&characterId=" + this.props.match.params.id;
        axios.get(url).then((res) => this.setState({skills: res.data}));
    };

    componentDidMount() {
        this.getCharacter();
        this.getSkills();
    }

    render(){
        console.log(this.state.skills);
        return(
            <div className="topContainer">
                <a href="/characters"><i class="fas fa-angle-left" id="goBackButton"></i></a>
                <div className="centeredTopRow"><h1>{this.state.character.name}</h1></div>
                <div className="centeredColumn">
                    <div className="centeredRow">
                        <img id="portrait" src={this.state.character.imagesrc} width="200px" height="200px" alt="Character's image"/>
                    </div>
                    <div className="centeredRow">
                        <div className={"centeredColumn" + " " + "characterViewTopSection"}>
                            <div><strong>Player:</strong>Janek</div>
                            <hr></hr>
                            <div><strong>Gender:</strong> {this.state.character.gender}</div>
                            <div><strong>Race:</strong> {this.state.character.race}</div>
                            <div><strong>Class:</strong> {this.state.character.characterclass}</div>
                            <div><strong>Weight:</strong> 123kg</div>
                            <div><strong>Height:</strong> 123cm</div>
                            <div><strong>Age:</strong> {this.state.character.age}</div>
                            <div><strong>Misc:</strong>{this.state.character.additionalinfo}</div>
                        </div>
                        <div className={"centeredColumn" + " " + "characterViewTopSection"}>
                            <textarea readOnly className="backgroundInfo" value={this.state.character.background}/>
                        </div>
                    </div>
                    <div className="centeredRow">
                        <div className={"centeredColumn" + " " + "characterViewTopSection"}>
                            <h1>Stats</h1>
                            <div className="statSection">
                                <div id="stats">
                                    {this.createStats()}
                                </div>
                            </div>
                        </div>
                        <div className={"centeredColumn" + " " + "characterViewTopSection"}>
                            <h1>Inventory</h1>
                            <div className={"statSection" + " " + "inventory"}>
                                <div id="cap">Cap: 25/67 kg</div>
                                <div className="thickLine"></div>
                                <div className="inventorySection">
                                    <h3>Weapons</h3>
                                    <div className="thickLine"></div>
                                    <Item />
                                    <Item />
                                    <Item />
                                </div>
                                <div className="inventorySection">
                                    <h3>Armor</h3>
                                    <div className="thickLine"></div>
                                    <Item />
                                    <Item />
                                    <Item />
                                </div>
                                <div className="inventorySection">
                                    <h3>Misc</h3>
                                    <div className="thickLine"></div>
                                    <Item />
                                    <Item />
                                    <Item />
                                </div>
                                <div className={"unchangableRow" + " " + "flexEnd"}>
                                    <div className={"unchangableRow" + " " + "flexEnd"}>
                                        <i class="fas fa-plus"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1 className="skillName">Skills</h1>
                    <div className="centeredRow">
                        <div className={"centeredColumn"  + " " + "characterViewTopSection"}>
                            {this.createSkills(0,Math.ceil(this.props.skillCount/2))}
                        </div>

                        <div className={"centeredColumn"  + " " + "characterViewTopSection"}>
                            {this.createSkills(Math.ceil(this.props.skillCount/2), this.props.skillCount)}
                        </div>
                    </div>
                    <div className="centeredRow">
                        <label className={"button" + " " + "levelButton"}><a href={"/characters/edit/" + this.props.match.params.id}>Edit</a></label>
                    </div>
                    <footer>
                        <p>&#9400; 2019 Paszko&N0vv4k Entertainment</p>
                    </footer>
                </div>
            </div>
        );
    }
}

export default CharacterDetails;