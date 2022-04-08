'use strict';

/*
  Author: Ma. Katrina P. Magsakay
  Purpose: DGL 113 Project - Website Enhancement
  Date Last Modified: April 07, 2022 


  
SCRIPT FOR absorb.html
- I created carosel to show the images/ dinning of Barrio Quatro.
- The container that displays the selected images.
- The display image will show at container when the raw image has ben clicked.
- The image will change through clicking the forward and back arrow.
- At upper left image this will show in which number of images are you in.
- The caption also changes depends on the selected images .
*/ 

var slideIndex = 1;
showSlides(slideIndex);

// Implementation of next and previous buttons
function plusSlides(image) {
  showSlides(slideIndex += image);
}
console.log(plusSlides);

// Implementation of thumbnail images
function currentSlide(image) {
  showSlides(slideIndex = image);
}
console.log(currentSlide);

function showSlides(image) {
  var i;
  var slides = document.getElementsByClassName("Absorb-mySlides");
  var place = document.getElementsByClassName("Absorb-place");
  var captionText = document.getElementById("Absorb-caption");

  if (image > slides.length) {slideIndex = 1;}
  if (image < 1) {slideIndex = slides.length;}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  for (i = 0; i < place.length; i++) {
    place[i].className = place[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  place[slideIndex-1].className += " active";
  captionText.innerHTML = place[slideIndex-1].alt;
}