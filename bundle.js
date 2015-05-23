(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
void function(root){

  function defaults(options){
    var options = options || {}
    var min = options.min
    var max = options.max
    var integer = options.integer || false
    if ( min == null && max == null ) {
      min = 0
      max = 1
    } else if ( min == null ) {
      min = max - 1
    } else if ( max == null ) {
      max = min + 1
    }
    if ( max < min ) throw new Error('invalid options, max must be >= min')
    return {
      min:     min
    , max:     max
    , integer: integer
    }
  }

  function random(options){
    options = defaults(options)
    if ( options.max === options.min ) return options.min
    var r = Math.random() * (options.max - options.min + Number(!!options.integer)) + options.min
    return options.integer ? Math.floor(r) : r
  }

  function generator(options){
    options = defaults(options)
    return function(min, max, integer){
      options.min     = min     || options.min
      options.max     = max     || options.max
      options.integer = integer != null ? integer : options.integer
      return random(options)
    }
  }

  module.exports =  random
  module.exports.generator = generator
  module.exports.defaults = defaults
}(this)

},{}],2:[function(require,module,exports){
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

},{"random-number":1}]},{},[2]);
