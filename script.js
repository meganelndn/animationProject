"use strict";

document.querySelector("DOMContentLoaded", init);

/*-------------------IMPORT IMAGES------------------*/
import {
    gallery
} from "./modules/gallery"

const data = [{
        i: "bulbWhite.svg"
    },
    {
        i: "SimpleTimeline.svg"
    }
];
gallery(data, document.body);

/*-------------------INITIALISING: Fetch svg's------------------*/
async function init() {
    const response = await fetch("static/imgs/");
    const svgData = await response.text();
    document.querySelector("body").innerHTML = svgData;
    startManipulatingTheSvg();
}

function startManipulatingTheSvg() {

}