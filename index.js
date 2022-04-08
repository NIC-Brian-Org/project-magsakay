'use strict';

/*
  Author: Ma. Katrina P. Magsakay
  Purpose: DGL 113 Project - Website Enhancement
  Date Last Modified: April 07, 2022 



SCRIPT FOR index.html
HOVER EFFECT:
- on mouse over - eat, drink, absorb the background image will change
     to its corresponding image
- on mouse out - background will disappear
*/ 

function eatBG() {
  var eat = document.getElementById("main-nav");
  eat.classList.add("eat-BG");
}
console.log(eatBG);

function drinkBG() {
  var drink = document.getElementById("main-nav");
  drink.classList.add("drink-BG");
}
console.log(drinkBG);

function absorbBG() {
  var absorb = document.getElementById("main-nav");
  absorb.classList.add("absorb-BG");
}
console.log(absorbBG);

function showNav() {
  var show = document.getElementById("nav-items");
  show.classList.toggle("show-items");
}
console.log(showNav);

function hideBG() {
  var hide = document.getElementById("main-nav");
  hide.classList.remove("eat-BG", "drink-BG", "absorb-BG");
}
console.log(hideBG);