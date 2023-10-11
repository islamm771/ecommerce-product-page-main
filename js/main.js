let shoppingBag = document.querySelector(".svg");
shoppingBag.onclick = function () {
  document.querySelector(".card").classList.toggle("open-card");
};
let value;
let btnInc = document.getElementById("inc");
let btnDec = document.getElementById("dec");
btnInc.onclick = function () {
  value = parseInt(document.getElementById("no").innerHTML) + 1;
  document.getElementById("no").innerHTML = value;
};
btnDec.onclick = function () {
  value = parseInt(document.getElementById("no").innerHTML) - 1;
  document.getElementById("no").innerHTML = value;
};
let btnAdd = document.querySelector(".add");
let btnDel = document.querySelector(".del");
btnAdd.onclick = function () {
  if(value > 0){
    document.querySelector(".empty").classList.add("empty-del");
    document.querySelector(".after-add").classList.add("show-add");
    document.querySelector(".product-number").innerHTML = `$125 x ${value}`;
    document.querySelector(".product-price").innerHTML = `$${125 * value}`;
    document.querySelector(".num-product").innerHTML = value;
  }
};
btnDel.onclick = function () {
  document.querySelector(".empty").classList.remove("empty-del");
  document.querySelector(".after-add").classList.remove("show-add");
  document.querySelector(".num-product").innerHTML = 0;
};
let images = [
  "image-product-1.jpg",
  "image-product-2.jpg",
  "image-product-3.jpg",
  "image-product-4.jpg",
];
const toggleImage = (element) =>{
  document.querySelectorAll(".section .other-pic div").forEach((d) => {
    d.classList.remove("active");
  });
  element.classList.add("active");
  let img = element.children[0];
  let attr = img.getAttribute("src").slice(0, 22);
  attr += ".jpg";
  let mainImg = document.getElementById("main-img");
  mainImg.src = attr;
}
const ViewImage = (element) =>{
  document.querySelector('body').style.overflowY = 'hidden'
  document.querySelector('.full img').src = element.children[0].getAttribute('src')
  document.querySelector('.full').classList.add("show-full")
  let el = element.children[0].getAttribute("src").slice(7);
  let x = document.querySelectorAll(".full .other-pic div")[images.indexOf(el)]; 
  toggleImageFull(x);
}

const closeFull = () =>{
    document.querySelector(".full").classList.remove("show-full");
    document.querySelector("body").style.overflowY = "visible";
}
let index = 0
const prevImage = () =>{
  index -=1
  if(index < 0){
    index = images.length - 1
  }
  let x = document.querySelectorAll(".full .other-pic div")[index]; 
  toggleImageFull(x);
  document.getElementById("full-img").src = `images/${images[index]}`;
};
const nextImage = () =>{
  index +=1
  if(index == images.length){
    index = 0
  }
  let x = document.querySelectorAll(".full .other-pic div")[index];
  toggleImageFull(x);
  document.getElementById("full-img").src = `images/${images[index]}`;
};

const toggleImageFull = (element) => {
  document.querySelectorAll(".full .other-pic div").forEach((d) => {
    d.classList.remove("active");
  });
  element.classList.add("active");
  let img = element.children[0];
  let attr = img.getAttribute("src").slice(0, 22);
  attr += ".jpg";
  index = images.indexOf(attr.slice(7))
  let mainImg = document.getElementById("full-img");
  mainImg.src = attr;
};