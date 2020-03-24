require("@babel/polyfill");
("use strict");

window.addEventListener("DOMContentLoaded", init);

/*--------------------GSAP----------------------*/
import { gsap } from "gsap";

/*---------------import images------------------*/
/* import {
    gallery
} from "./modules/gallery"

const data = [{
    i: "bulbWhite.svg"
}];
gallery(data, document.body); */

/*-------------- init function -----------------*/
async function init() {
  let response = await fetch("imgs/bulbWhite.svg");
  let responseTl = await fetch("imgs/timeline.svg");
  let responseBox = await fetch("imgs/infobox.svg");

  let svgData = await response.text();
  document.querySelector("#bulb").innerHTML = svgData;
  let mainSvg = await responseTl.text();
  document.querySelector("#mainSvg").innerHTML = mainSvg;
  let infoSvg = await responseBox.text();
  document.querySelector("#infoBoxSvg").innerHTML = infoSvg;

  startManipulatingSvg();
}

function startManipulatingSvg() {
  console.log("hi");
}

/*--------------- bulb animation ---------------*/
gsap.set("#bulb", {
  scale: 0.6,
  y: -140
});

const timeline = gsap.timeline();

timeline
  .to("#bulb", {
    strokeDasharray: 200,
    strokeDashoffset: 150,
    duration: 2
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
    scale: 0.1
  });
