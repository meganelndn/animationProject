require("@babel/polyfill");
"use strict";

document.querySelector("DOMContentLoaded", init);

/*-------------------IMPORT IMAGES------------------*/
import {
    gallery
} from "./modules/gallery"

const data = [{
    i: "bulbWhite.svg"
}];
gallery(data, document.body);

/*--------------INITIALISING: Fetch svg's-------------*/
async function init() {
    //bulb
    const response = await fetch("imgs/bulbWhite.svg");
    let svgData = await response.text();
    document.querySelector("#bulb").innerHTML = svgData;

    manipulateBulb();
}

function manipulateBulb() {
    console.log("hi")
}