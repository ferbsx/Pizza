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

// get document heigth cross-browser!
var documentsize = require('get-document-size');
var height = documentsize.height;
var width = documentsize.width;

// handling colors
var colours = require('color');

//such import
//much doge
var doge = require('doge');

var body = document.querySelector("#main1")

// var words = ["such wow", "Pizza!", "WOW", ":winky:", "<3", "very nice!", "amazing!", "much sexy", "Delicious!"]
var words_v2 = ["Pizza", "Delicious", "Cheese", "Nom"]
var fonts = ["Comic Sans MS"]

var create_element = function(){
  var element = document.createElement("div");
  // var content = words[getRandom(words.length-1)];
  var content = doge(words_v2[getRandom(words_v2.length-1)]);
  var text = document.createTextNode(content);         // Create a text node
  element.appendChild(text);

  // set style and attribute for the element
  element.style.position ="fixed";
  element.style.display ="block";
  element.style.top = getRandom(height)+"px";
  element.style.left = getRandom(width)+"px";
  element.style.fontSize = getRandom(80)+"px";
  element.style.fontFamily = fonts //getRandom(fonts);
  element.style.color = colours({h:getRandom(100), s: 300, l: 45}).hslString()
  element.setAttribute("class", "wow");

  // add element to the page
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


// alternate between the pictures in a loop
$(window).load(function() {

    var InfiniteRotator =
    {
        init: function()
        {
            //initial fade-in time (in milliseconds)
            var initialFadeIn = 1000;

            //interval between items (in milliseconds)
            var itemInterval = 5000;

            //cross-fade time (in milliseconds)
            var fadeTime = 2500;

            //count number of items
            var numberOfItems = $('.rotating-item').length;

            //set current item
            var currentItem = 0;

            //show first item
            $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);

            //loop through the items
            var infiniteLoop = setInterval(function(){
                $('.rotating-item').eq(currentItem).fadeOut(fadeTime);

                if(currentItem == numberOfItems -1){
                    currentItem = 0;
                }else{
                    currentItem++;
                }
                $('.rotating-item').eq(currentItem).fadeIn(fadeTime);

            }, itemInterval);
        }
    };

    InfiniteRotator.init();

});
