[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7484509&assignment_repo_type=AssignmentRepo)
# dgl-113-project

## Table of Contents

* [Website Background](https://github.com/NIC-Brian-Org/project-magsakay/blob/main/README.md#website-background)
* [Features Added](https://github.com/NIC-Brian-Org/project-magsakay/blob/main/README.md#features-added)
    - [Home Page](https://github.com/NIC-Brian-Org/project-magsakay/blob/main/README.md#home-page)
    - [Eat and Drink Page](https://github.com/NIC-Brian-Org/project-magsakay/blob/main/README.md#eat-and-drink-page)
    - [Absorb Page](https://github.com/NIC-Brian-Org/project-magsakay/blob/main/README.md#absorb-page)
* [Implementation](https://github.com/NIC-Brian-Org/project-magsakay/blob/main/README.md#implementation)
    - [Home Page](https://github.com/NIC-Brian-Org/project-magsakay/blob/main/README.md#home-page-1)
    - [Eat Page](https://github.com/NIC-Brian-Org/project-magsakay/blob/main/README.md#eat-page)
    - [Drink Page](https://github.com/NIC-Brian-Org/project-magsakay/blob/main/README.md#drink-page)
    - [Absorb Page](https://github.com/NIC-Brian-Org/project-magsakay/blob/main/README.md#absorb-page-1)
* [HTML Validation Results](https://github.com/NIC-Brian-Org/project-magsakay/blob/main/README.md#html-validation-results)
* [CSS Validation Result](https://github.com/NIC-Brian-Org/project-magsakay/blob/main/README.md#css-validation-result)
* [JavaScript Validation Result](https://github.com/NIC-Brian-Org/project-magsakay/blob/main/README.md#javascript-validation-result)
* [Browser Testing Result](https://github.com/NIC-Brian-Org/project-magsakay/blob/main/README.md#browser-testing-result)
    - [Google Chrome](https://github.com/NIC-Brian-Org/project-magsakay/blob/main/README.md#google-chrome)
    - [Microsoft Edge](https://github.com/NIC-Brian-Org/project-magsakay/blob/main/README.md#microsoft-edge)
* [Project Work Experience](https://github.com/NIC-Brian-Org/project-magsakay/blob/main/README.md#project-work-experience)



## Website Background

Barrio Quatro Website is my project presented in DGL 103 – Web Design last term. It is my first business that started in Philippines which is small food restaurant that I opened during pandemic (2020). This business is situated in downtown which is small community, and most business is don’t have any website. Creating this website is the first website in our community, but still, I didn’t manage to publish it since I must polish this website first to be more interactive.

It is my chance to enhance the website since I now studied basic techniques in using JavaScript. For now, I’ve made simple changes that makes this more personalized to the customers and for easy navigation of the menus.

The following content will demonstrate the features that I added on the website and how I implement those. I provide HTML & CSS Validation and including browser testing results. In addition, I also document my work experience in completing this project.



## Features Added

### Home Page

For index.html, I add a prompt that asks the name of the customer, this feature makes the website personalized that shows their given name to the home page, welcoming them to the Barrio Quatro restaurant. I find it delightful when the customers saw their name in the actual website it feels more sense of personal touch between our customers and the business. Below are the images of before and after implementing the JavaScript:

**HTML & CCS only**

![html/css home](https://user-images.githubusercontent.com/90713171/162364098-5fad197b-02d7-4a78-873e-52af3f60cea4.png)

**with JAVASCRIPT**

![prompt](https://user-images.githubusercontent.com/90713171/162364217-7fe40a9e-15b7-4622-9be1-8a6b14471d7e.png)

![home](https://user-images.githubusercontent.com/90713171/162364233-c7a7e9db-5c19-4547-a393-34c99bb35a7a.png)

Additional enhancement in index.html is the hover effect of the background to the main navigation. I have three categories which directed to the menu of EAT and DRINK, while the ABSORB is the images of restaurant. The onmouseover and onmouseout will show and hide the specific background image that assigned to that category. Please see images of the improvement:

**HTML & CCS only** _(notice the DRINK has underline which onmouseover, default background)_
 
![html/css home bg](https://user-images.githubusercontent.com/90713171/162364315-51a6350e-36ca-4f55-9d1f-e170083193a1.png)

**with JAVASCRIPT** _(notice the DRINK has underline which onmouseover, background changed)_
 
![home hover bg](https://user-images.githubusercontent.com/90713171/162364400-0b5c0d6f-8b2c-4ed6-985b-4491e182cfce.png)

### Eat and Drink Page

For eat.html and drink.html, I made same changes in these pages since they are both menu and should have same intent of laying out the content. I’ve decided to have a filtered button for each category:

* **eat menu** – made to order, platter, soup, chicken, fried and grilled street foods 
* **drink menu** – fresh fruit shakes, flavored milk shakes and coolers
The default view of both pages is the SHOW ALL which means all the foods and drinks already displayed in the page, the customers will decide and click in which category they want to view. Below are the images of before and after implementing the JavaScript:

**HTML & CCS only** _(shows complete menu all the way down the page)_

![html css - eat drink](https://user-images.githubusercontent.com/90713171/162364903-26fc6da6-334d-47b9-9551-1b967729dbfb.png)

**with JAVASCRIPT** _(with buttons that filtered each category)_

![eat js](https://user-images.githubusercontent.com/90713171/162365193-35d6d897-7a45-4f9f-ad68-c6efbfa14af9.png)

![drink js](https://user-images.githubusercontent.com/90713171/162365256-a49afc53-ebb8-46cb-9b62-0f1caf8de325.png)

### Absorb Page

For absorb.html page, I decided to create images gallery that is in something slideshow. I decided a gallery since this page includes the images of the physical store that I find more suitable in displaying the ambiance of the restaurant in a clickable thumbnail or with the next and previous buttons. Please see images below for the changes that I’ve made from HTML & CSS to with the implementation of JAVASCRIPT:

**HTML & CCS only**

![image](https://user-images.githubusercontent.com/90713171/162365623-5b9289e4-f509-4cbc-a6e5-c5b73b4fe470.png)

**with JAVASCRIPT**

![image](https://user-images.githubusercontent.com/90713171/162365717-58e46749-be22-4673-8155-79b11ad0f710.png)



## Implementation

For implementation of those changes in features added I used JavaScript, here are the things that I did:

### Home Page

* Adding prompt, I add implementation code on index.html file:

```
let customerName = prompt("Please enter your name kaBARRIO:")
```

* For displaying the customer’s name that they input at prompt, I add script to specific area which I want to display the value:

```
<script>document.write(customerName)</script>
```

* Implementing hover effect background image to my main nav when onmouseover and onmouseout, I add the following code in index.html:

```
<main class="Home-main">
<div id="main-nav" class="main-nav">
<a href="Eat.html" onmouseover="eatBG()" onmouseout="hideBG()">EAT</a>
<a href="Drink.html" onmouseover="drinkBG()" onmouseout="hideBG()">DRINK</a>
<a href="Absorb.html" onmouseover="absorbBG()" onmouseout="hideBG()">ABSORB</a>
</div>
```

* To complete the hover effect, I created index.js file and add the following code on which on mouse over - eat, drink, absorb the background image will change to its corresponding image while on mouse out - background will disappear:

```
function eatBG() {
  var eat = document.getElementById("main-nav");
  eat.classList.add("eat-BG");
}
function drinkBG() {
  var drink = document.getElementById("main-nav");
  drink.classList.add("drink-BG");
}
function absorbBG() {
  var absorb = document.getElementById("main-nav");
  absorb.classList.add("absorb-BG");
}
function showNav() {
  var show = document.getElementById("nav-items");
  show.classList.toggle("show-items");
}

function hideBG() {
  var hide = document.getElementById("main-nav");
  hide.classList.remove("eat-BG", "drink-BG", "absorb-BG");
}
```

### Eat Page

Adding the selection button for each category of foods, need this code at eat.html:

```
<nav id="EatmyBtnContainer">
  <button class="Eat-btn active" onclick="filterSelection('all')"> Show all</button>
  <button class="Eat-btn" onclick="filterSelection('made')"> Made to Order</button>
  <button class="Eat-btn" onclick="filterSelection('platter')"> Barrio's Platter</button>
  <button class="Eat-btn" onclick="filterSelection('soup')"> Soup</button>
  <button class="Eat-btn" onclick="filterSelection('chicken')"> Barrio's Chicken</button>
  <button class="Eat-btn" onclick="filterSelection('fried')"> Fried Street Foods</button>
  <button class="Eat-btn" onclick="filterSelection('grilled')"> Grilled Street Foods</button>
</nav>
```

* Add styles of navigation and container of the images to style.css file
* At navigation button, the show all button is the default state, which is highlighted, and all the menus will display. Once the category of foods/ menu has been selected, the highlighted button will move to that button. It will filter the foods that included in the said category (Made to Order, Barrio's Platter, Soup, Barrio's Chicken, Fried Street Foods & Grilled Street Foods). For implementing, I add eat.js files and create these codes:

```
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
```

### Drink Page

* This is similar to what I did in eat.html. Adding the selection button for each category of drinks, need this code at drink.html:

```
<nav id="DrinkmyBtnContainer">
<button class="Drink-btn active" onclick="filterSelection('all')"> Show all</button>
<button class="Drink-btn" onclick="filterSelection('fresh')"> Fresh Fruit Shake</button>
<button class="Drink-btn" onclick="filterSelection('flavored')"> Flavored Milk Shake with Pearl</button>
<button class="Drink-btn" onclick="filterSelection('coolers')"> Coolers</button>
</nav>
```

* Add styles of navigation and container of the images to style.css file
* At navigation button, the show all button is the default state, which is highlighted, and all the drinks will display. Once the category of drinks/ menu has been selected, the highlighted button will move to that button. It will filter the drinks that included in the said category (Fresh Fruit Shake, Flavored Milk Shake with Pearl & Coolers). For implementing, I add drink.js files and create these codes:

```
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
```

### Absorb Page
* For implementing images slideshow, I created codes in absorb.htm for:
    * Container of the images
    * 100% image size with number in the top left of the image
    * Next and previous buttons
    * Caption of the images
    * Thumbnail view of the images
* In style.css, add codes to style the image slideshow, each caption of the images, the next & previous buttons, and the number of the image at the top left side.

* To implement these desired features, I created absorb.js file and have these code:

```
var slideIndex = 1;
showSlides(slideIndex);

// Implementation of next and previous buttons
function plusSlides(image) {
  showSlides(slideIndex += image);
}

// Implementation of thumbnail images
function currentSlide(image) {
  showSlides(slideIndex = image);
}
function showSlides(image) {
  var i;
  var slides = document.getElementsByClassName("Absorb-mySlides");
  var place = document.getElementsByClassName("Absorb-demo");
  var captionText = document.getElementById("Absorb-caption");

  if (image > slides.length) {slideIndex = 1}
  if (image < 1) {slideIndex = slides.length}

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
```



## HTML Validation Results

All the errors and warnings has been addressed and fixed, please see screenshots of each file’s validation results below:

* **index.html**

![html - index](https://user-images.githubusercontent.com/90713171/162367320-655f3e5e-52c6-4895-b77c-b05f11143d36.PNG)

* **eat.html**

![html - eat](https://user-images.githubusercontent.com/90713171/162367431-a0d7db43-3772-47d3-9a49-d90c695f077f.PNG)

* **drink.html**

![html - drink](https://user-images.githubusercontent.com/90713171/162367446-3a6a84de-f09e-44ad-99e9-ca5420becc21.PNG)

* **absorb.html**

![html - absorb](https://user-images.githubusercontent.com/90713171/162367472-7a722961-acdf-42ad-ab97-f0754df0a491.PNG)


## CSS Validation Result

All the errors and warnings has been addressed and fixed, please see screenshot of my ccs file validation result below:

* **style.css**

![CSS - style](https://user-images.githubusercontent.com/90713171/162367658-9df0c1ef-86cf-4354-b206-db02250e1eea.PNG)



## JavaScript Validation Result

All the errors and warnings has been addressed and fixed, please see screenshots of each file’s validation results below:

* **index.js**

![js - index](https://user-images.githubusercontent.com/90713171/162367833-7374c688-613d-4d7f-8d9b-665bc4d8165c.PNG)

* **eat.js**
* 
![js - eat](https://user-images.githubusercontent.com/90713171/162367855-bdfefcc8-20bd-422c-9379-bd3429f3cab2.PNG)

* **drink.js**

![js - drink](https://user-images.githubusercontent.com/90713171/162367867-99ce0ce5-481f-4f29-9a34-36de9828ee35.PNG)

* **absorb.js**

![js - absorb](https://user-images.githubusercontent.com/90713171/162367889-d46178bd-324e-4c36-a6c5-251c44039954.PNG)



## Browser Testing Result

This section’s content is the implementation of my enhancement and testing if it works properly in different browser like Google Chrome and Microsoft Edge.

### Google Chrome

* Asks the correct message and prompt properly works:

![chrome - prompt](https://user-images.githubusercontent.com/90713171/162368040-6599f107-bd94-4337-a995-9e7a5142d34d.PNG)

* At home page, the input value at prompt correctly display to the area I wanted it to be.
 
![chrome - home](https://user-images.githubusercontent.com/90713171/162368082-14da30f3-85f1-4499-be04-aa95b9f43b9e.png)

* When I hover the mouse over the DRINK it will be underlined and the background changes to drinks.
 
 ![chrome - home drink](https://user-images.githubusercontent.com/90713171/162368195-c1799240-c22e-40cc-b626-2b70ddaa0689.png)

* On eat and drink page, both the selected category filtered the items that belongs to it.
 
![chrome - eat](https://user-images.githubusercontent.com/90713171/162368231-77737c08-92c8-4d5a-8a19-4e73014d24e4.PNG)

![chrome - drinks](https://user-images.githubusercontent.com/90713171/162368246-937704ec-2abc-4d26-bbda-fd7a4edcbc81.png)

* The slideshow is perfectly works, the number at the top left, the next and back button is highlighted when it hovered, the caption of the image and the active image in thumbnails is highlighted.
 
![chrome - absorb](https://user-images.githubusercontent.com/90713171/162368280-93351c98-ba9b-42ff-8d08-875f7ba90b45.png)



### Microsoft Edge

* Asks the correct message and prompt properly works:
 
![edge - prompt](https://user-images.githubusercontent.com/90713171/162368377-6c1e0492-e34c-4fa3-85cf-8b3e60242cec.png)

* At home page, the input value at prompt correctly display to the area I wanted it to be
 
 ![edge - home](https://user-images.githubusercontent.com/90713171/162368402-6caf3cc3-a752-4f15-9a56-f2cd4131d8dc.PNG)

* When I hover the mouse over the DRINK (first image) and ABSORB (second image) it will be underlined and the background changes to drinks / absorb (dining area).
 
![edge - home drink](https://user-images.githubusercontent.com/90713171/162368426-673dfc0c-ceb8-4ee2-924b-83716990f189.png)

![edge - home absorb](https://user-images.githubusercontent.com/90713171/162368442-54b59d7d-903d-4f76-ad7b-3e52f03d5d96.png)

* On eat and drink page, both the selected category filtered the items that belongs to it.
 
![edge - eat](https://user-images.githubusercontent.com/90713171/162368471-d51bb0b2-924a-4189-893a-2d902ef11199.PNG)

![edge - drink](https://user-images.githubusercontent.com/90713171/162368482-72fbbfcc-2dd0-49fa-a29a-98e58a69517a.PNG)

* The slideshow is perfectly works, the number at the top left, the next and back button is highlighted when it hovered, the caption of the image and the active image in thumbnails is highlighted.
 
![edge - absorb](https://user-images.githubusercontent.com/90713171/162368491-53bc23f3-945f-4c99-adc1-069091e18132.png)



## Project Work Experience
