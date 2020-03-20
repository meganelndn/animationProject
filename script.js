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

/*-------------------INITIALISING------------------*/
async function init() {
    const response = await fetch("static/imgs/timeline.svg");
    const svgData = await response.text();
    document.querySelector("body").innerHTML = svgData;
    startManipulatingTheSvg();
}

function startManipulatingTheSvg() {

}