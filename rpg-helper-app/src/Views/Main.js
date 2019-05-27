import React, { Component } from 'react';
import axios from 'axios';

class Main extends Component {

    constructor(props){
      super(props);
      this.state = {
          arrayOfData:[]
      }
    }

    saveCookie = () => {
      let dropdown = document.querySelector("#sessionsDropdown");
      let selected = dropdown.options[dropdown.selectedIndex].value;
      document.cookie = "session="+selected;
      console.log(document.cookie);
    }


    createOptions = () => {
      let options = []

      for (let i = 0; i < this.state.arrayOfData.length; i++) {
        let str = this.state.arrayOfData[i].sessionid+":"+this.state.arrayOfData[i].sessionname;
        options.push(<option className="options" value={str}>{str}</option>);
      }

      return options;
    }

    componentWillMount(){
      const url='http://v-ie.uek.krakow.pl/~s206775/db_operations.php?operation=getElements&tableName=sessions';
      axios.get(url)
      .then(res => {
        const data = res.data;
        this.setState({ arrayOfData:data });
      });
    }

    render() {
      return (
        <div className="topContainer">
          <div className="centeredColumn">

            <div className="centeredRow">
              <div className={"menuBox" + " " + "centeredColumn"}>
                <h1 id="title">RPG-Helper</h1>
              </div>
              <div className={"menuBox" + " " + "centeredColumn"}>
                <div className="menuOption">
                  <label className="menuLabel">Choose session:</label>
                </div>
                <div className="menuOption">
                  <select id="sessionsDropdown">
                    {this.createOptions()}
                  </select>
                </div>
                <div className="menuOption">
                  <label className="button"><a href="/menu" onClick={this.saveCookie}>Accept</a></label>
                </div>
                <div className="menuOption">
                  <label className="menuLabel">Or add a new one:</label>
                </div>
                <div className="menuOption">
                  <label className="button"><a href="/session/add">Add session</a></label>
                </div>
              </div>
            </div>

          </div>
        </div>
      );
    }
  }

  export default Main;