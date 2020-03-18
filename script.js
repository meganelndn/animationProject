import {
    gallery
} from "./modules/gallery"

document.querySelector("h1").textContent = "Fooled you bitches!";

const data = [{
        i: "1.png"
    },
    {
        i: "2.png"
    }
];

gallery(data, document.body);