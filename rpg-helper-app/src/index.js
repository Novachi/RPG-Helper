import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// let mainList = document.querySelector(".main-list-container");
let topContainer = document.querySelector(".topContainer")
let height;

function calculateHeight(){
    let topCenter = document.querySelector(".centeredTopRow");
    if(topCenter != null){
        height = topContainer.scrollHeight - topCenter.scrollHeight;
    } else {
        height = topContainer.scrollHeight;
    }


    document.querySelector(".centeredColumn").style.height = height + "px";
}

calculateHeight();

// setInterval(calculateHeight, 1000);



// if(mainList != null) {
//     topElHeight = topCenter.scrollHeight;
//     height -= topElHeight;
//     mainList.style.height = height + "px";
// }
