import React, { Component } from 'react';

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
        return(
            <div className="statsRow">
                <div className={"statBox" + " " + "centeredColumn"}>{this.props.stat}</div>
                <div className={"statBox" + " " + "centeredColumn" + " " + "hide"}>
                    <i class="fas fa-minus"></i>
                </div>
                <div className={"statBox" + " " + "centeredColumn"}>27</div>
                <div className={"statBox" + " " + "centeredColumn" + " " + "hide"}>
                    <i class="fas fa-plus"></i>
                </div>
            </div>
        );
    }
}

class CharacterDetails extends Component {
    render(){
        return(
            <div className="topContainer">
                <a href="/characters"><i class="fas fa-angle-left" id="goBackButton"></i></a>
                <div className="centeredTopRow"><h1>Character Name</h1></div>
                <div className="centeredColumn">
                    <div className="centeredRow">
                        <img id="portrait" src="http://studioopinii.pl/wp-content/uploads/2013/02/glinski.jpg" width="200px" height="200px" alt="Character's ryj"/>
                    </div>
                    <div className="centeredRow">
                        <div className={"centeredColumn" + " " + "characterViewTopSection"}>
                            <div><strong>Player:</strong>Janek</div>
                            <hr></hr>
                            <div><strong>Gender:</strong> Janek</div>
                            <div><strong>Race:</strong> Janek</div>
                            <div><strong>Class:</strong> Janek</div>
                            <div><strong>Weight:</strong> Janek</div>
                            <div><strong>Height:</strong> Janek</div>
                            <div><strong>Age:</strong> Janek</div>
                            <div><strong>Race:</strong> Janek</div>
                            <div><strong>Misc:</strong>Janek Janek Janek Janek Alphangalfubengard JanekJanekJanekJanek</div>
                        </div>
                        <div className={"centeredColumn" + " " + "characterViewTopSection"}>
                            <textarea readOnly className="backgroundInfo">
                                Janek urodził się w małej wiosce, już od małego był chujem.
                                Janek urodził się w małej wiosce, już od małego był chujem.
                                Janek urodził się w małej wiosce, już od małego był chujem.
                                Janek urodził się w małej wiosce, już od małego był chujem.
                                Janek urodził się w małej wiosce, już od małego był chujem.
                                Janek urodził się w małej wiosce, już od małego był chujem.
                                Janek urodził się w małej wiosce, już od małego był chujem.
                                Janek urodził się w małej wiosce, już od małego był chujem.
                                Janek urodził się w małej wiosce, już od małego był chujem.
                                Janek urodził się w małej wiosce, już od małego był chujem.
                            </textarea>             
                        </div>
                    </div>
                    <div className="centeredRow">
                        <div className={"centeredColumn" + " " + "characterViewTopSection"}>
                            <h1>Stats</h1>
                            <div className="statSection">
                                <div id="stats">
                                    <StatSection stat="WS"/>
                                    <StatSection stat="BS"/>
                                    <StatSection stat="S"/>
                                    <StatSection stat="T"/>
                                    <StatSection stat="AG"/>
                                    <StatSection stat="INT"/>
                                    <StatSection stat="WP"/>
                                    <StatSection stat="FEL"/>
                                    <StatSection stat="A"/>
                                    <StatSection stat="W"/>
                                    <StatSection stat="SB"/>
                                    <StatSection stat="TB"/>
                                    <StatSection stat="M"/>
                                    <StatSection stat="MAG"/>
                                    <StatSection stat="IP"/>
                                    <StatSection stat="FP"/>
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
                            <div>
                                <h3 className="skillName">Rozpierdalanie</h3>
                                <div><strong>Level:</strong> 1/3</div>
                                <div><strong>Used stat:</strong> WS</div>
                                <div><strong>Details:</strong> Pozwala na rozpierdalanie przeciwnika, bo tak!</div>
                                <div className="line"></div>
                            </div>
                            <div>
                                <h3 className="skillName">Rozpierdalanie</h3>
                                <div><strong>Level:</strong> 1/3</div>
                                <div><strong>Used stat:</strong> WS</div>
                                <div><strong>Details:</strong> Pozwala na rozpierdalanie przeciwnika, bo tak!</div>
                                <div className="line"></div>
                            </div>
                        </div>
                
                        <div className={"centeredColumn"  + " " + "characterViewTopSection"}>
                            <div>
                                <h3 className="skillName">Rozpierdalanie</h3>
                                <div><strong>Level:</strong> 1/3</div>
                                <div><strong>Used stat:</strong> WS</div>
                                <div><strong>Details:</strong> Pozwala na rozpierdalanie przeciwnika, bo tak!  Pozwala na rozpierdalanie przeciwnika, bo tak!  Pozwala na rozpierdalanie przeciwnika, bo tak!  Pozwala na rozpierdalanie przeciwnika, bo tak!</div>
                                <div className="line"></div>
                            </div>
                            <div>
                                <h3 className="skillName">Rozpierdalanie</h3>
                                <div><strong>Level:</strong> 1/3</div>
                                <div><strong>Used stat:</strong> WS</div>
                                <div><strong>Details:</strong> Pozwala na rozpierdalanie przeciwnika, bo tak!</div>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                    <div className="centeredRow">
                        <label className={"button" + " " + "levelButton"}>Level Up!</label>
                    </div>
                    <footer>
                        <p>&#9400; 2019 Paszko Entertainment</p>
                    </footer>
                </div>
            </div>
        );
    }
}

export default CharacterDetails;