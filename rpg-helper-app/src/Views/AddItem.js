import React, { Component } from 'react';


class Item extends Component {
    constructor(props){
      super(props);
    }
  
    render(){

      return(
            <div className="centeredColumn">   
                <input type="hidden" name="characterId" value={this.props.characetrId} /> 
                <input type="hidden" name="itemId" value={this.props.nextItemId} /> 
                {console.log("kID:"+this.props.nextItemId)}
                {console.log("chID:"+this.props.characetrId)}
                <input type="hidden" name="itemType" value={document.cookie.substring(9)[0]} /> 
                <label >Name:</label>
                <input name="itemName" className="inputField" type="text" id="itemName"></input>
                <label >Weight:</label>
                <input name="itemWeight" className="inputField" type="number" id="itemWeight"></input>
                <label >Description:</label>
                <textarea name="itemDescription" className="inputField" type="text" id="itemDescription"></textarea>
                <label >Additional info:</label>
                <textarea name="itemAdditionalInfo" className="inputField" type="text" id="itemAdditionalInfo"></textarea>
            </div>
      );
    }
  }

  class Weapon extends Component {
    constructor(props){
      super(props);
    }
  
    render(){
      return(
            <div className="centeredColumn">
                <h3 >Add weapon:</h3>
                <br></br>
                <Item characetrId={this.props.characetrId} nextItemId={this.props.nextItemId}/>
                <label >Type:</label>
                <input name="weaponType" className="inputField" type="text" id="weaponType"></input>
                <label >Damage:</label>
                <input name="weaponDamage" className="inputField" type="number" id="weaponDamage"></input>
                <label >Range:</label>
                <input name="weaponRange" className="inputField" type="number" id="weaponRange"></input>
                <br></br>
                <div className="centeredRow">
                  <input className="submitButton" type="submit" value=" Add "></input>
                </div>
            </div>
      );
    }
  }

  class Armour extends Component {
    constructor(props){
      super(props);
    }
  
    render(){
      return(
            <div className="centeredColumn">
                <h3 >Add armour:</h3>
                <br></br>
                <Item characetrId={this.props.characetrId} nextItemId={this.props.nextItemId}/>
                <label >Type:</label>
                <input name="armourType" className="inputField" type="text" id="armourType"></input>
                <label >Defence:</label>
                <input name="armourDefence" className="inputField" type="number" id="armourDefence"></input>
                <br></br>
                <div className="centeredRow">
                  <input className="submitButton" type="submit" value=" Add "></input>
                </div>
            </div>
      );
    }
  }


class AddItem extends Component{

    renderItemForm = () => {
      let cookieValue = document.cookie.substring(9)[0];
      let characetrId = this.props.match.params.id;
      console.log("Nid:"+this.props.nextItemId);
       if(cookieValue == "1") {
         return <Weapon characetrId={characetrId} nextItemId={this.props.nextItemId}/>
        }
       else if (cookieValue == "2") {
         return <Armour characetrId={characetrId} nextItemId={this.props.nextItemId}/>
        }
       else {
         return [<h3 >Add simple item:</h3>,
                <br></br>,
                <Item characetrId={characetrId} nextItemId={this.props.nextItemId}/>,
                <br></br>,
                <div className="centeredRow">
                  <input className="submitButton" type="submit" value=" Add "></input>
                </div>]
        }
        
    }

    changeType(event){
      let id = event.currentTarget.id;
      let num = 0;
      
      if(id == "Item"){
        num = 3;
      } else if(id == "Armour") {
        num = 2;
      } else if(id == "Weapon"){
        num = 1;
      }
      document.cookie = "itemType=" + num;
      window.location.reload(false); 
    }

    render(){
        return(
            <div className="topContainer">
                <a href={"/characters/"+this.props.match.params.id}><i class="fas fa-angle-left" id="goBackButton"></i></a>
                <div className="centeredTopRow">
                    <h1>Add New Item</h1>
                </div>
                <div className="centeredColumn">
                    <div className="centeredRow">
                    <form className="addForm" method="POST" action="http://v-ie.uek.krakow.pl/~s206775/addItem.php">
                        <div className="centeredRow">
                            <div className={"centeredColumn" + " " + "formSection"}>
                            <label className="button" onClick={this.changeType} id="Item" >I</label>
                            </div>
                            <div className={"centeredColumn" + " " + "formSection"}>
                            <label className="button" onClick={this.changeType} id="Weapon" >W</label>
                            </div>
                            <div className={"centeredColumn" + " " + "formSection"}>
                            <label className="button" onClick={this.changeType} id="Armour" >A</label>
                            </div>
                        </div>
                        <br></br>
                        {this.renderItemForm()}
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddItem;