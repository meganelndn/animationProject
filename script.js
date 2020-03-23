require("@babel/polyfill");
"use strict";

window.addEventListener("DOMContentLoaded", init);

/*--------------------IMPORT GSAP------------------*/
import {
    gsap
} from "gsap";

/*-------------------IMPORT IMAGES------------------*/
/* import {
    gallery
} from "./modules/gallery"

const data = [{
    i: "bulbWhite.svg"
}];
gallery(data, document.body); */

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

/*---------------GSAP Animation for BULB-------------*/
gsap.set("#bulb", {
    scale: 0.6,
    y: -140
});

const timeline = gsap.timeline();

timeline.to("#bulb", {
        strokeDasharray: 200,
        strokeDashoffset: 150,
        duration: 2,
    })
    .to("#bulb", {
        strokeDashoffset: 0,
        delay: 0.5
    })
    .to("#bulb", {
        y: 20,
        rotation: 180
    })
    .to("#bulb", {
        y: -480,
        x: -440,
        scale: .1
    });