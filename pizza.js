"use strict";
var pizza = {};
pizza.hide = function (sel) {
  pizza.hideElements(pizza.getElements(sel));
};
pizza.hideElements = function (elements) {
  var i, l = elements.length;
  for (i = 0; i < l; i++) {
    pizza.hideElement(elements[i]);
  }
};
pizza.hideElement = function (element) {
  pizza.styleElement(element, "display", "none");
};
pizza.show = function (sel, a) {
  var elements = pizza.getElements(sel);
  if (a) {pizza.hideElements(elements);}
  pizza.showElements(elements);
};
pizza.showElements = function (elements) {
  var i, l = elements.length;
  for (i = 0; i < l; i++) {
    pizza.showElement(elements[i]);
  }
};
pizza.showElement = function (element) {
  pizza.styleElement(element, "display", "block");
};
pizza.addStyle = function (sel, prop, val) {
  pizza.styleElements(pizza.getElements(sel), prop, val);
};
pizza.styleElements = function (elements, prop, val) {
  var i, l = elements.length;
  for (i = 0; i < l; i++) {    
    pizza.styleElement(elements[i], prop, val);
  }
};
pizza.styleElement = function (element, prop, val) {
  element.style.setProperty(prop, val);
};
pizza.toggleShow = function (sel) {
  var i, x = pizza.getElements(sel), l = x.length;
  for (i = 0; i < l; i++) {    
    if (x[i].style.display == "none") {
      pizza.styleElement(x[i], "display", "block");
    } else {
      pizza.styleElement(x[i], "display", "none");
    }
  }
};
pizza.addClass = function (sel, name) {
  pizza.addClassElements(pizza.getElements(sel), name);
};
pizza.addClassElements = function (elements, name) {
  var i, l = elements.length;
  for (i = 0; i < l; i++) {
    pizza.addClassElement(elements[i], name);
  }
};
pizza.addClassElement = function (element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
};
pizza.removeClass = function (sel, name) {
  pizza.removeClassElements(pizza.getElements(sel), name);
};
pizza.removeClassElements = function (elements, name) {
  var i, l = elements.length, arr1, arr2, j;
  for (i = 0; i < l; i++) {
    pizza.removeClassElement(elements[i], name);
  }
};
pizza.removeClassElement = function (element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
};
pizza.toggleClass = function (sel, c1, c2) {
  pizza.toggleClassElements(pizza.getElements(sel), c1, c2);
};
pizza.toggleClassElements = function (elements, c1, c2) {
  var i, l = elements.length;
  for (i = 0; i < l; i++) {    
    pizza.toggleClassElement(elements[i], c1, c2);
  }
};
pizza.toggleClassElement = function (element, c1, c2) {
  var t1, t2, t1Arr, t2Arr, j, arr, allPresent;
  t1 = (c1 || "");
  t2 = (c2 || "");
  t1Arr = t1.split(" ");
  t2Arr = t2.split(" ");
  arr = element.className.split(" ");
  if (t2Arr.length == 0) {
    allPresent = true;
    for (j = 0; j < t1Arr.length; j++) {
      if (arr.indexOf(t1Arr[j]) == -1) {allPresent = false;}
    }
    