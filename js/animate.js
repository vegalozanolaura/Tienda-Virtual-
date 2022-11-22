const logo = document.querySelector("#logo")
const navlinks = document.querySelector(".nav-links")
const circle = document.querySelector(".circle")
const header = document.querySelector(".header")
const imgGuns= document.querySelector(".hero-img")
const herotext = document.querySelector(".hero-text")
const redes = document.querySelector(".redes-sociales")
const elementstart = document.querySelector(".elements-star")

const tl = new TimelineMax();

tl.fromTo(header,1,{height: "0%"},{height: "80%" , ease: Power2.easeInout})
.fromTo(logo,1.2,{width: "-100%"},{width: "0%" , ease: Power2.easeInout},"-=1.2")
.fromTo(logo, 0.5, {opacity: 0, x: 30},{opacity: 1, x: 0},"-=0.5")
.fromTo(navlinks, 0.5, {opacity: 0, x: 30},{opacity: 1, x: 0},"-=0.5")
.fromTo(imgGuns, 0.5, {opacity: 0, x: 30},{opacity: 1, x: 0},"-=0.5")
.fromTo(herotext, 0.5, {opacity: 0, x: 30},{opacity: 1, x: 0},"-=0.5")
.fromTo(redes, 0.5, {opacity: 0},{opacity: 1},"-=0.5")
.fromTo(elementstart, 0.5, {opacity: 0},{opacity: 1},"-=0.5")
.fromTo(circle, 1.2, {opacity: 0},{opacity: 1},"-=0.5")

let products = [];
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}

function pay() {
    window.alert(products.join(", \n"));
}
