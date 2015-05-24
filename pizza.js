// Random Number generator
var rn = require('random-number');
function getRandom(max) {
  var options = {
    min:  0
  , max:  max
  , integer: true
  }
  return rn(options);
}

//get document heigth cross-browser!
var documentsize = require('get-document-size');
var height = documentsize.height;
var width = documentsize.width;

// handleing colors
var colours = require('color');

var body = document.querySelector("#main")

var words = ["wow", "Pizza!", "WOW", "<3", "nice!"]
var fonts = ["Comic Sans MS"]

var create_element = function(){
  var element = document.createElement("div");
  var content = words[getRandom(words.length-1)];
  var text = document.createTextNode(content);         // Create a text node
  element.appendChild(text);

  //set style and attribute for the element
  element.style.position ="fixed";
  element.style.display ="block";
  element.style.top = getRandom(height)+"px";
  element.style.left = getRandom(width)+"px";
  element.style.fontSize = getRandom(80)+"px";
  element.style.fontFamily = fonts //getRandom(fonts);
  element.style.color = colours({h:getRandom(100), s: 300, l: 45}).hslString()
  element.setAttribute("class", "wow");

  //add element to the page
  body.appendChild(element)
}

var rmv_element = function(){
  if (document.querySelector(".wow")){
    e =document.querySelector(".wow");
    e.parentNode.removeChild(e);
  }
}

setInterval(create_element, 500);
setInterval(rmv_element, 2000);
setInterval(rmv_element, 3000);
setInterval(rmv_element, 3500);
setInterval(rmv_element, 4000);
setInterval(rmv_element, 4500);
setInterval(rmv_element, 5000);
