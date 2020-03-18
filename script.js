import {
    gallery
} from "./modules/gallery"

document.querySelector("h1").textContent = "Let's test this bulb";

const data = [{
        i: "1.png"
    },
    {
        i: "2.png"
    }
];

gallery(data, document.body);