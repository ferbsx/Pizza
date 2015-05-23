var rn = require('random-number');
var colours = require('color')

var height = document.height;
var width = document.width;

var words = ["wow", "Pizza!", "WOW", "<3", "nice!"]
var fonts = ["Comic Sans MS"]
var body = document.querySelector("#main")

function getRandom(max) {
  var options = {
    min:  0
  , max:  max
  , integer: true
  }
  return rn(options);
}

var create_word = function(){
  var element = document.createElement("div");
  var content = words[getRandom(words.length-1)];
  // console.log(content);
  var text = document.createTextNode(content);         // Create a text node
  element.appendChild(text);

  element.style.position ="fixed";
  element.style.display ="block";
  element.style.top = getRandom(height)+"px";
  element.style.left = getRandom(width)+"px";
  element.style.fontSize = getRandom(80)+"px";
  element.style.fontFamily = fonts //getRandom(fonts);
  element.style.color = colours({h:getRandom(100), s: 300, l: 45}).hslString()

  // console.log(element)

  body.appendChild(element)
}

var rmv_word = function(){
  // TODO: remove element
}

setInterval(create_word, 500);
