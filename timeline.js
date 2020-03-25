//to fix error when fetching svg using async
require("@babel/polyfill");
"use strict"

document.addEventListener("DOMContentLoaded", start);

/* -------------------------- Global ------------------------------ */
let allInventions;
let userChoice;
let identify;

/* -------------------------- Fetch------------------------------ */
async function start() {
  console.log("test");
  //timeline
 let response = await fetch("imgs/finalmente_timeline.svg");
  let mainSvg = await response.text();
  document.querySelector("#mainSvg").innerHTML = mainSvg;
  //infobox
  let responseBox = await fetch("imgs/finalmente_box.svg");
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
  //console.log(allInventions.replace("", "<br>"))
  const invention = allInventions.find(inv => inv.id === identify);
  console.log(allInventions.find(inv => inv.id === identify))
  //replace content from infobox with json:
  const infobox = document.querySelector("#infobox");
  console.log(infobox);
  let inventor = document.querySelector("#inventor");
  inventor.textContent = invention.inventor;
  let description = document.querySelector("#text");
  description.innerHTML = invention.text;
  let title = document.querySelector("#title");
  title.textContent = invention.title;
  let date = document.querySelector("#date");
  date.textContent = invention.year;
  let imageObject = document.querySelector("#image")
  imageObject.setAttribute("href", `imgs/${invention.image} `);  
}