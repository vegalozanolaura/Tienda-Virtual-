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

function changeimg(anything){
    document.querySelector(".img-Guns").src = anything;
}

function changecircle(color){
    const circle = document.querySelector(".circle");
    circle.style.background = color;
}

