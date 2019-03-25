import React, { Component } from 'react';


class Characters extends Component {
    render() {
      return (
          <div className="screen">
        <div className={"main-list-container" + " " + "column" + " " + "characterCard"}>
                    <div className={"main-box" + " " + "top-center"}>
                        <h1>Characters</h1>
                    </div>
                    <div className={"center-container"}>
                        <div className={"main-box" + " " + "remove-padding" + " " + "row"}>
                                <div className="column">
                                        <img className="ryj" src="http://studioopinii.pl/wp-content/uploads/2013/02/glinski.jpg" width="200px" height="200px" alt="Character's ryj"/>
                                </div>
                                <div className="column">
                                    <div className="second-box">Name: Knauf Goldbaum</div>
                                    <div className="second-box">Race: Elfik</div>
                                    <div className="second-box">Class: Chuop</div>
                                </div>
                                <div className="column">
                                    <div className="second-box">Player: Theveloper</div>
                                    <div className="second-box">Level: 32</div>
                                    <div className="second-box">Goldbaum: 1000</div>
                                </div>
                                <div className="column">
                                    <div className="second-box">Sex: Male</div>
                                    <div className="second-box">Available Exp: 200</div>
                                    <div className="second-box"><label className="button"><a href="/characters/character">Details</a></label></div>
                                </div>

                        
                            
                        </div>
                    
                            
                    
                    </div>
                </div>
                </div>
      );
    }
  }



export default Characters;