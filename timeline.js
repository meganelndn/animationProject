"use strict"

document.addEventListener("DOMContentLoaded", start);
//to fix error when fetching svg using async
const regeneratorRuntime = require("regenerator-runtime");
 
async function start(){
    console.log("test")
    //timeline
    let response = await fetch("static/svg/timeline.svg");
    let mainSvg = await response.text();
    document.querySelector("#mainSvg").innerHTML = mainSvg;
    //infobox
    let responseBox = await fetch("/static/svg/timeline_test.svg");
    let infoSvg = await responseBox.text();
    document.querySelector("#infoBoxSvg").innerHTML = infoSvg;
  
    //load json
    startManipulatingData();
}

function startManipulatingData(){
    console.log("testando")
}