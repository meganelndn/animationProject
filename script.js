require("@babel/polyfill");
"use strict";

window.addEventListener("DOMContentLoaded", init);

/* -------------------------- Global ------------------------------ */
let allInventions;
let userChoice;
let identify;

/*--------------------GSAP----------------------*/
import {
    gsap
} from "gsap";

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
    let responseTl = await fetch("imgs/deusTimeline.svg");
    let responseBox = await fetch("imgs/deusBox.svg");

    let svgData = await response.text();
    document.querySelector("#bulb").innerHTML = svgData;
    let mainSvg = await responseTl.text();
    document.querySelector("#mainSvg").innerHTML = mainSvg;
    let infoSvg = await responseBox.text();
    document.querySelector("#infoBoxSvg").innerHTML = infoSvg;

    //start
    startManipulatingData();
    //include svg on main
    includeInfoBox();
    //loadJson
    loadJSON();
}

/* -------------------------- start ------------------------------ */
function startManipulatingData() {
    //change original size
    document.querySelector("#mainSvg svg").setAttribute("viewBox", "0 0 3500 700");
    document.querySelector("#mainSvg svg").setAttribute("height", "50%");
    //change what appears First:
    console.log(document.querySelector("#infoBoxSvg #inventor"))
    document.querySelector("#infoBoxSvg #title").textContent = "Facts about electricity";
    document.querySelector("#infoBoxSvg #inventor").textContent = "";
    document.querySelector("#infoBoxSvg #date").textContent = "";
    //hide all text:
    document.querySelector("#infoBoxSvg #text6").textContent = "";
    document.querySelector("#infoBoxSvg #text5").textContent = "";
    document.querySelector("#infoBoxSvg #text4").textContent = "";
    document.querySelector("#infoBoxSvg #text3").textContent = "";
    document.querySelector("#infoBoxSvg #text2").textContent = "";
    document.querySelector("#infoBoxSvg #text1").textContent = "";
    //document.querySelector("#infoBoxSvg #text").innerHTML = "<tspan>Click on points from the timeline to </tspan><tspan x='0' y='30'> view popular facts about electricity</tspan>";
    document.querySelector("#infoBoxSvg #image").setAttribute("href", `imgs/bolt.svg`);
    //hide line at the beggining:
    document.querySelector("#timeline .cls-2").setAttribute("display", "none");
    //hide the box frame:
    document.querySelector("#infobox .cls-1").setAttribute("display", "none");
    //show all bullets
    console.log(document.querySelector("#bullets"));
    //show clicked bullet
    document.querySelector("#bullets").addEventListener("click", selectCircle);
}

/* -------------------------- use SVG ------------------------------ */
function includeInfoBox() {
    const fullTimeline = document.querySelector("#mainSvg svg");
    const addInfobox = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "use"
    );
    addInfobox.setAttribute("width", "200");
    addInfobox.setAttribute("height", "50");
    addInfobox.setAttribute("href", "#infobox");
    fullTimeline.appendChild(addInfobox);
    //hide the external Infobox
    //fullTimeline.classList.add("hiddenBox");
    document.querySelector("#infoBoxSvg").classList.add("hiddenBox")
    console.log();
}

/* -------------------------- LOAD JSON LIST ------------------------------ */
async function loadJSON() {
    //const response = await fetch("imgs/inventions.json");
    const response = await fetch("imgs/inventions_version2.json");
    const jsonData = await response.json();
    //when loaded, prepare data objects:
    prepareObjects(jsonData);
}

/* -------------------------- PREPARE LIST ------------------------------ */
function prepareObjects(jsonData) {
    console.log(`${jsonData[2].title}`);
    allInventions = jsonData;
    console.log(allInventions);
}

/* -------------------------- onClick user bullet ------------------------------ */
function selectCircle(selectedBullet) {
    console.log(selectedBullet)
    //user clicked bullet
    userChoice = selectedBullet.target;
    //user clicked bullet - with path to #id:
    identify = userChoice.id;
    console.log(identify);
    //show box line:
    document.querySelector("#timeline .cls-2").setAttribute("display", "block");
    //console.log(allInventions.replace("", "<br>"))
    const invention = allInventions.find(inv => inv.id === identify);
    console.log(allInventions.find(inv => inv.id === identify))
    //replace content from infobox with json:
    const infobox = document.querySelector("#infobox");
    console.log(infobox);
    let inventor = document.querySelector("#inventor");
    inventor.textContent = invention.inventor;

    //text:
    let text6 = document.querySelector("#text6");
    text6.textContent = invention.text6;
    let text5 = document.querySelector("#text5");
    text5.textContent = invention.text5;
    let text4 = document.querySelector("#text4");
    text4.textContent = invention.text4;
    let text3 = document.querySelector("#text3");
    text3.textContent = invention.text3;
    let text2 = document.querySelector("#text2");
    text2.textContent = invention.text2;
    let text1 = document.querySelector("#text1");
    text1.textContent = invention.text1;


    let title = document.querySelector("#title");
    title.textContent = invention.title;
    let date = document.querySelector("#date");
    date.textContent = invention.year;
    let imageObject = document.querySelector("#image")
    imageObject.setAttribute("href", `imgs/${invention.image} `);
    //change the position of the line:
    const boxLine = document.querySelector("#timeline .cls-2");
    //console.log(document.querySelector("#timeline .cls-2"))
    const x1 = Math.floor(userChoice.getAttribute("cx"));
    console.log(userChoice)
    console.log(Math.floor(userChoice.getAttribute("cy")))
    const y1 = userChoice.getAttribute("cx");
    const x2 = x1;
    //const x2 = x1 + 50; -- will make it slightly down
    const y2 = y1;
    boxLine.setAttribute("x1", x1);
    //boxLine.setAttribute("y1", y1);
    boxLine.setAttribute("x2", x2);
    //boxLine.setAttribute("y2", y2);

    //find infobox to move it:
    console.log(document.querySelector("#infobox rect"))
    const moveInfoBox = document.querySelector("#mainSvg use");
    moveInfoBox.setAttribute("x", x2 - 160);
    moveInfoBox.setAttribute("y", "150");


}

/*--------------- bulb gsap animation ------------*/
gsap.set("#bulb", {
    scale: 0.7,
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
        rotation: 180,
        ease: "none"
    });
/*     .to("#vertical_line", {
        strokeDasharray: 300,
        strokeDashoffset: 300,
        duration: 2,
        delay: 3
    })
    .to("#vertical_line", {
        strokeDashoffset: 0,
    }); */