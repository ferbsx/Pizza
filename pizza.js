var rn = require('random-number');

var height = document.body.clientHeight;
var width = document.body.clientWidth;

var words = ["wow", "Pizza!", "WOW", "<3", "nice!"]
var body =document.querySelector("body")

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

  element.style.position ="absolute";
  element.style.display ="block";
  element.style.top = getRandom(height)+"px";
  element.style.left = getRandom(width)+"px";
  body.appendChild(element)
}

var rmv_word = function(){
  // TODO: remove element
}

setInterval(create_word, 500);
