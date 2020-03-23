require("@babel/polyfill");
"use strict"

window.addEventListener("DOMContentLoaded", start);
//to fix error when fetching svg using async

async function start() {
    console.log("test")
    //timeline
    let response = await fetch("imgs/timeline.svg");
    let mainSvg = await response.text();
    document.querySelector("#mainSvg").innerHTML = mainSvg;
    //infobox
    let responseBox = await fetch("imgs/infobox.svg");
    let infoSvg = await responseBox.text();
    document.querySelector("#infoBoxSvg").innerHTML = infoSvg;
    //load json
    startManipulatingData();

}

function startManipulatingData() {
    console.log("testando")
    console.log()
}