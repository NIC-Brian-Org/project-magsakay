'use strict';

/*
  Author: Ma. Katrina P. Magsakay
  Purpose: DGL 113 Project - Website Enhancement
  Date Last Modified: April 07, 2022 


  
SCRIPT FOR drink.html

- similar to eat.js intent
- At navigation button, the show all button is the default state which is highlighted 
    and all the drinks will display.
- Once the category of drinks/ menu has been selected, 
    the highlighted button will move to that button.
- It will filter the drinks that included in the said category
    (Fresh Fruit Shake, Flavored Milk Shake with Pearl & Coolers)
*/ 

filterSelection("all");
  function filterSelection(drinks) {
    var drink, i;
    drink = document.getElementsByClassName("Drink-column");
    if (drinks == "all") drinks = "";
    for (i = 0; i < drink.length; i++) {
      drinksRemoveClass(drink[i], "Drink-show ");
      if (drink[i].className.indexOf(drinks) > -1) drinksAddClass(drink[i], "Drink-show ");
    }
  }
  
  function drinksAddClass(drinks, name) {
    var i, drink1, drink2;
    drink1 = drinks.className.split(" ");
    drink2 = name.split(" ");
    for (i = 0; i < drink2.length; i++) {
      if (drink1.indexOf(drink2[i]) == -1) {drinks.className += " " + drink2[i];}
    }
  }
  
  function drinksRemoveClass(drinks, name) {
    var i, drink1, drink2;
    drink1 = drinks.className.split(" ");
    drink2 = name.split(" ");
    for (i = 0; i < drink2.length; i++) {
      while (drink1.indexOf(drink2[i]) > -1) {
        drink1.splice(drink1.indexOf(drink2[i]), 1);     
      }
    }
    drinks.className = drink1.join(" ");
  }

  // Add active class to the current button (highlight it)
  var btnContainer = document.getElementById("DrinkmyBtnContainer");
  var btns = btnContainer.getElementsByClassName("Drink-btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }