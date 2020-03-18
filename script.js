import {
    gallery
} from "./modules/gallery"

/* document.querySelector("h1").textContent = "Yo mom";

const data = [{
        i: "1.png"
    },
    {
        i: "2.png"
    }
];

gallery(data, document.body); */

$(function () {
    $(".power").click(function () {
        $("body").toggleClass("active");
    });
});