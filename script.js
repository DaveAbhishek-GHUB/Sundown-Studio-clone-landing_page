const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// var a = document.querySelector("#elem-6");
// var image = a.getAttribute("data-image");
// console.log(image)

var elemc = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");

elemc.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
});

elemc.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});

// var elem1 = document.querySelector("#elem-1")
// elem1.addEventListener("mouseenter", function(){
//     var image = elem1.getAttribute("data-image")
//     console.log(image);
//     fixed.style.backgroundImage = `url(${image})`;
// })

// var elem2 = document.querySelector("#elem-2")
// elem2.addEventListener("mouseenter", function(){
//     var image = elem2.getAttribute("data-image")
//     console.log(image);
//     fixed.style.backgroundImage = `url(${image})`;
// })

// var elem3 = document.querySelector("#elem-3")
// elem3.addEventListener("mouseenter", function(){
//     var image = elem3.getAttribute("data-image")
//     console.log(image);
//     fixed.style.backgroundImage = `url(${image})`;
// })

// var elem4 = document.querySelector("#elem-4")
// elem4.addEventListener("mouseenter", function(){
//     var image = elem4.getAttribute("data-image")
//     console.log(image);
//     fixed.style.backgroundImage = `url(${image})`;
// })

// var elem5 = document.querySelector("#elem-5")
// elem5.addEventListener("mouseenter", function(){
//     var image = elem5.getAttribute("data-image")
//     console.log(image);
//     fixed.style.backgroundImage = `url(${image})`;
// })

// var elem6 = document.querySelector("#elem-6")
// elem6.addEventListener("mouseenter", function(){
//     var image = elem6.getAttribute("data-image")
//     console.log(image);
//     fixed.style.backgroundImage = `url(${image})`;
// })

// var elem7 = document.querySelector("#elem-7")
// elem7.addEventListener("mouseenter", function(){
//     var image = elem7.getAttribute("data-image")
//     console.log(image);
//     fixed.style.backgroundImage = `url(${image})`;
// })

// var elem8 = document.querySelector("#elem-8")
// elem8.addEventListener("mouseenter", function(){
//     var image = elem8.getAttribute("data-image")
//     console.log(image);
//     fixed.style.backgroundImage = `url(${image})`;
// })

var elems = document.querySelectorAll(".elem");
console.log(elems);

elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var image = e.getAttribute("data-image");
    console.log(image);
    fixed.style.backgroundImage = `url(${image})`;
  });
});
