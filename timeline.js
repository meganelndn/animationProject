//to fix error when fetching svg using async
require("@babel/polyfill");
("use strict");

document.addEventListener("DOMContentLoaded", start);

/* -------------------------- Global ------------------------------ */
let allInventions;
let allBullets;
let userChoice;
let identify;

/* -------------------------- Fetch------------------------------ */
async function start() {
  console.log("test");
  //timeline
  let response = await fetch("imgs/timeline_M.svg");
  let mainSvg = await response.text();
  document.querySelector("#mainSvg").innerHTML = mainSvg;
  //infobox
  //let responseBox = await fetch("imgs/Asset 3.svg");
  let responseBox = await fetch("imgs/infobox_M.svg");
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
  console.log("tetse");
  //show all bullets
  allBullets = document.querySelectorAll("ellipse");
  console.log(allBullets);

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
  console.log();
}

/* -------------------------- LOAD JSON LIST ------------------------------ */
async function loadJSON() {
  const response = await fetch("imgs/inventions.json");
  const jsonData = await response.json();
  //when loaded, prepare data objects:
  prepareObjects(jsonData);
}

/* -------------------------- PREPARE LIST ------------------------------ */
function prepareObjects(jsonData) {
  //  let bullets = document.querySelector(`${jsonData.title}`);
  console.log(`${jsonData[2].title}`);
  allInventions = jsonData;
  console.log(allInventions);
  allInventions.forEach(showOne);
  //allBullets = document.querySelectorAll("ellipse");
  //console.log(bullets)
  //allBullets = bullets;
  //console.log(document.querySelector("#bullets ellipse"))
  //allBullets = document.querySelectorAll("ellipse");
  //console.log(allBullets[0])
  //console.log(allBullets[1])
  //console.log(allBullets[0].id)
  // console.log(userChoice)
}

/* -------------------------- make card ------------------------------ */
function showOne(invention, identify) {
  console.log(invention);
  //the single INVENTION from json
  console.log(
    `the invention number ${invention.id} has same number as the bullet`
  );
  //the click of user:
  console.log(`user is clicking on bullet with number ${identify}`);
  console.log(`point${identify}`);
  //console.log(identify)
  console.log(invention.id);
  //console.log(`point${identify}`)
  //console.log(`point${invention.id}`)

  /*************compare and make new card*****************/
  //if the invention id === the click of the user id("identify"), build a new card:
  if (invention.id === `point${identify}`) {
    //bullets.addEventListener("click", buildCard)
    console.log("clicked one");
    buildCard(invention);
  } else {
    console.log("not clicked");
  }

  /* //build a new card with info from the json file:
    function buildCard() {
        console.log(invention.director)
       const infobox = document.querySelector("#poster")
       console.log(infobox)
        let director = document.querySelector(".inventor")
        director.textContent = invention.director;

    } */
}

function buildCard(invention) {
  console.log(`user click ID ${identify}`);
  console.log(invention);
  console.log(`invention ID ${invention.id}`);

  const infobox = document.querySelector("#infobox");
  console.log(infobox);
  let inventor = document.querySelector(".cls-3");
  inventor.textContent = invention.inventor;
  let description = document.querySelector(".cls-5");
  description.textContent = invention.text;
}

/* -------------------------- onClick user bullet ------------------------------ */
function selectCircle(selectedBullet) {
  //user clicked bullet
  userChoice = selectedBullet.target;
  //user clicked bullet - with path to #id:
  identify = userChoice.id;
  console.log(identify, allInventions);
  const invention = allInventions.find(inv => inv.id === identify);
  //console.log(allInventions)
  return identify;
}
