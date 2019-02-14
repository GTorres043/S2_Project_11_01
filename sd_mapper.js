"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Gabriel Torres
   Date:   2/12/19

*/

//this will start the time in the page to display the present time
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();
document.getElementById("timeStamp").innerHTML = timeStr;

//will display the image depending on the date 
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();

//this is the formula to choose which image is going to be displayed depeneding on the date
var mapNum = ((2 * thisMonth + thisHour) % 24);
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";
document.getElementById("planisphere").insertAdjacentHTML('afterbegin', imgStr);