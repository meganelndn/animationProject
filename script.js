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

/*--------------INITIALISING: Fetch svg's-------------*/
async function init() {
    //bulb
    const response = await fetch("imgs/bulbWhite.svg");
    let svgData = await response.text();
    document.querySelector("section").innerHTML = svgData;
    //timeline
    const responseTimeline = await fetch("imgs/SimpleTimeline.svg");
    const mainSvg = await responseTimeline.text();
    document.querySelector("body").innerHTML = mainSvg;
}