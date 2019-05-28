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


class WeaponStats extends Component{
    render() {
        return(
            <div>
                <span className="itemDef">Type: <span>{this.props.item.weapontype}</span></span><br></br>
                <span className="itemAtk">Atk: <span>{this.props.item.weapondamage}</span> | </span>
                <span className="itemDef">Range: <span>{this.props.item.weaponrange}</span></span><br></br>
            </div>
        );
    }
}

class ArmourStats extends Component{
    render() {
        return(
            <div>
                
                <span className="itemDef">Type: <span>{this.props.item.armourtype}</span></span><br></br>
                <span className="itemDef">Def: <span>{this.props.item.armourdefence}</span></span><br></br>
            </div>
        );
    }
}


class Item extends Component {

    renderStats = () => {
        if(this.props.itemType == 2){
            return <WeaponStats  item={this.props.item}/>
        }
        if(this.props.itemType == 3){
            return <ArmourStats  item={this.props.item}/>
        }
    }

    render() {
        return(
            <div>
                <div className="item">
                    <div className={"unchangableRow" + " " + "flexStart"}>
                        <p>{this.props.item.itemname}</p>
                        <div className="deleteItem">
                            <i class="fas fa-minus"></i>
                        </div>
                    </div>
                    <div className="details">
                        <p className="itemStats">
                            {this.renderStats()}
                            Weight: <span>{this.props.item.weight}</span> kg
                        </p>
                        <p>{this.props.item.itemdescription}</p>
                        <p>{this.props.item.misc}</p>
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
            skills: [],
            items: [],
            weapons: [],
            armours: [],
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
                if(this.state.skills[i] != undefined){
                    console.log(i);
                    skills.push(<Skill skill={this.state.skills[i]}/>);
                }
            }

        return skills;
    };

    createItems = (type) =>{
        let items = [];
        if(this.state.items.length && type == 1){
            for(let i=0; i<this.state.items.length; i++){
                items.push(<Item item={this.state.items[i]} itemType={1}/>);
            }
        }
        if(this.state.weapons.length && type == 2){
            for(let i=0; i<this.state.weapons.length; i++){
                items.push(<Item item={this.state.weapons[i]} itemType={2}/>);
            }
        }
        if(this.state.armours.length && type == 3){
            for(let i=0; i<this.state.armours.length; i++){
                items.push(<Item item={this.state.armours[i]} itemType={3}/>);
            }
        }

        return items;
    }

    getCharacter = () => {
        let url = "http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=getCharacter&characterId=" + this.props.match.params.id;
        axios.get(url).then((res) => this.setState({character: res.data[0]}));
    };

    getSkills = () => {
        let url = "http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=getSkills&characterId=" + this.props.match.params.id;
        axios.get(url).then((res) => this.setState({skills: res.data}));
    };

    getItems = () => {
        let url = "http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=getItems&characterId=" + this.props.match.params.id;
        axios.get(url).then((res) => this.setState({items: res.data}));
    };

    getWeapons = () => {
        let url = "http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=getWeapons&characterId=" + this.props.match.params.id;
        axios.get(url).then((res) => this.setState({weapons: res.data}));
    };

    getArmours = () => {
        let url = "http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=getArmours&characterId=" + this.props.match.params.id;
        axios.get(url).then((res) => this.setState({armours: res.data}));
    };

    componentDidMount() {
        this.getCharacter();
        this.getSkills();
        this.getItems();
        this.getWeapons();
        this.getArmours();
    }

    render(){
        console.log(this.state.skills);
        console.log("I:");
        console.log(this.state.items);
        console.log(this.state.weapons);
        console.log(this.state.armours);
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
                            <div><strong>Player:</strong>{this.state.character.player}</div>
                            <hr></hr>
                            <div><strong>Gender:</strong> {this.state.character.gender}</div>
                            <div><strong>Race:</strong> {this.state.character.race}</div>
                            <div><strong>Class:</strong> {this.state.character.characterclass}</div>
                            <div><strong>Weight:</strong> {this.state.character.weight}</div>
                            <div><strong>Height:</strong> {this.state.character.height}</div>
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
                            <h1>Inventory <button className="editButton"><a className="fas fa-plus" href={"/characters/" + this.props.match.params.id + "/items/add"}></a></button></h1>
                            <div className={"itemSection" + " " + "inventory"}>
                                <div className="inventorySection">
                                    <h3>Weapons</h3>
                                    <div className="thickLine"></div>
                                    {this.createItems(2)}
                                </div>
                                <div className="inventorySection">
                                    <h3>Armor</h3>
                                    <div className="thickLine"></div>
                                    {this.createItems(3)}
                                </div>
                                <div className="inventorySection">
                                    <h3>Misc</h3>
                                    <div className="thickLine"></div>
                                    {this.createItems(1)}
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1 className="skillName">Skills</h1>
                    <div className="centeredRow">
                        <div className={"centeredColumn"  + " " + "characterViewTopSection" + " skills"}>
                            {this.createSkills(0,Math.ceil(this.props.skillCount))}
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