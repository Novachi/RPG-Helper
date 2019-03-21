import React, { Component } from 'react';

class Notes extends Component {
    constructor(props){
        super(props);
    }


    render(){
        console.log(this.props);
        return(
            <div className="screen">
                <div className={"main-container" + " " + "column" + " " + "fullscreen"}>
                    <div className={"main-box" + " " + "top-center"}>
                        <h1>Session</h1>
                    </div>
                    <div className="center-container">
                        <div className="main-box">
                            <div className="note">
                            <div className="second-box">
                                    <h3 id="date">22.01.2019 22:32</h3>
                                </div>
                                <div className="second-box">
                                    <p><span className="tab"></span>Jarek poszedl po piwo i kupil dwa zamiast jednego Jarek poszedl po piwo i kupil dwa zamiast jednego Jarek poszedl po piwo i kupil dwa zamiast jednego Jarek poszedl po piwo i kupil dwa zamiast jednego Jarek poszedl po piwo i kupil dwa zamiast jednego</p>
                                </div>
                            </div> 
                        </div>
                        <div className="main-box">
                            <div className="note">
                            <div className="second-box">
                                    <h3 id="date">22.01.2019 22:32</h3>
                                </div>
                                <div className="second-box">
                                    <p><span className="tab"></span>Jarek poszedl po piwo i kupil dwa zamiast jednego Jarek poszedl po piwo i kupil dwa zamiast jednego Jarek poszedl po piwo i kupil dwa zamiast jednego Jarek poszedl po piwo i kupil dwa zamiast jednego Jarek poszedl po piwo i kupil dwa zamiast jednego</p>
                                </div>
                            </div> 
                        </div>
                        <div className="main-box">
                            <div className="note">
                            <div className="second-box">
                                    <h3 id="date">22.01.2019 22:32</h3>
                                </div>
                                <div className="second-box">
                                    <p><span className="tab"></span>Jarek poszedl po piwo i kupil dwa zamiast jednego Jarek poszedl po piwo i kupil dwa zamiast jednego Jarek poszedl po piwo i kupil dwa zamiast jednego Jarek poszedl po piwo i kupil dwa zamiast jednego Jarek poszedl po piwo i kupil dwa zamiast jednego</p>
                                </div>
                            </div> 
                        </div>
                        <div className="main-box">
                            <div className="note">
                            <div className="second-box">
                                    <h3 id="date">22.01.2019 22:32</h3>
                                </div>
                                <div className="second-box">
                                    <p><span className="tab"></span>Jarek poszedl po piwo i kupil dwa zamiast jednego Jarek poszedl po piwo i kupil dwa zamiast jednego Jarek poszedl po piwo i kupil dwa zamiast jednego Jarek poszedl po piwo i kupil dwa zamiast jednego Jarek poszedl po piwo i kupil dwa zamiast jednego</p>
                                </div>
                            </div> 
                        </div>
                        <div className="main-box">
                            <div className="note">
                            <div className="second-box">
                                    <h3 id="date">22.01.2019 22:32</h3>
                                </div>
                                <div className="second-box">
                                    <p><span className="tab"></span>Jarek poszedl po piwo i kupil dwa zamiast jednego Jarek poszedl po piwo i kupil dwa zamiast jednego Jarek poszedl po piwo i kupil dwa zamiast jednego Jarek poszedl po piwo i kupil dwa zamiast jednego Jarek poszedl po piwo i kupil dwa zamiast jednego</p>
                                </div>
                            </div> 
                        </div>
                    </div>
           
                </div>
            </div>
        );
    }
}

export default Notes;