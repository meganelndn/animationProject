"use strict"

document.addEventListener("DOMContentLoaded", start);

async function start(){
    console.log("test")
    //timeline
    let response = await fetch("static/svg/timeline.svg");
    let mainSvg = await response.text();
    document.querySelector("#mainSvg").innerHTML = mainSvg;
  
    //load json
    startManipulatingData();
}

function startManipulatingData(){
    console.log("testando")
}