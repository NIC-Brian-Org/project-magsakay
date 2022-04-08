'use strict';

/*
  Author: Ma. Katrina P. Magsakay
  Purpose: DGL 113 Project - Website Enhancement
  Date Last Modified: April 07, 2022 



SCRIPT FOR eat.html

- similar to drink.js intent
- At navigation button, the show all button is the default state which is highlighted 
    and all the menus will display.
- Once the category of foods/ menu has been selected, 
    the highlighted button will move to that button.
- It will filter the foods that included in the said category
    (Made to Order, Barrio's Platter, Soup, Barrio's Chicken, 
    Fried Street Foods & Grilled Street Foods)
*/

filterSelection("all");
function filterSelection(foods) {
  var eat, i;
  eat = document.getElementsByClassName("Eat-column");
  if (foods == "all") foods = "";
  for (i = 0; i < eat.length; i++) {
    foodsRemoveClass(eat[i], "Eat-show ");
    if (eat[i].className.indexOf(foods) > -1) foodsAddClass(eat[i], "Eat-show ");
  }
}

function foodsAddClass(menu, name) {
  var i, menu1, menu2;
  menu1 = menu.className.split(" ");
  menu2 = name.split(" ");
  for (i = 0; i < menu2.length; i++) {
    if (menu1.indexOf(menu2[i]) == -1) {menu.className += " " + menu2[i];}
  }
}

function foodsRemoveClass(menu, name) {
  var i, menu1, menu2;
  menu1 = menu.className.split(" ");
  menu2 = name.split(" ");
  for (i = 0; i < menu2.length; i++) {
    while (menu1.indexOf(menu2[i]) > -1) {
        menu1.splice(menu1.indexOf(menu2[i]), 1);     
    }
  }
  menu.className = menu1.join(" ");
}

// Add active class to the current button (highlight it)

var btnContainer = document.getElementById("EatmyBtnContainer");
var btns = btnContainer.getElementsByClassName("Eat-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}