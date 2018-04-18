let h1 = document.querySelector("h1");
h1.className = "coolTitle";
let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let button = document.getElementById("color3");

//console.log(button);
//console.log(color1);
//console.log(color2);
let body = document.getElementById("style-master");


function eventHandler() {
    body.style.background = "linear-gradient(to right, "
        + color1.value + ", "
        + color2.value + "), red";

        
}
function cleanCode() {
    eventHandler();
}
function randomButton() {
 console.log(Math.floor(Math.random() * Math.floor(3)));
 css.textContent = (new Date().toLocaleString());
}

color1.addEventListener("input", cleanCode);
color2.addEventListener("input", cleanCode);
button.addEventListener("click", randomButton);

