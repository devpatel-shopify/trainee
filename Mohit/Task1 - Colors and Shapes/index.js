// normal code below 
// function red() {
//     var elements = document.querySelectorAll(".square");
//     elements.forEach((element) =>element.classList.add("red"));
//     elements.forEach((element) =>element.classList.remove("yellow"));
//     elements.forEach((element) =>element.classList.remove("green"));
// }
// function yellow() {
//     var elements = document.querySelectorAll(".square");
//     elements.forEach((element) =>element.classList.add("yellow"));
//     elements.forEach((element) =>element.classList.remove("red"));
//     elements.forEach((element) =>element.classList.remove("green"));
// }
// function green() {
//     var elements = document.querySelectorAll(".square");
//     elements.forEach((element) =>element.classList.add("green"));
//     elements.forEach((element) =>element.classList.remove("yellow"));
//     elements.forEach((element) =>element.classList.remove("red"));
// }
// function square() {
//     var elements = document.querySelectorAll(".square");
//     elements.forEach((element) =>element.classList.add("shapeSquare"));
//     elements.forEach((element) =>element.classList.remove("shapeCircle"));
//     elements.forEach((element) =>element.classList.remove("shapeRectangle"));
// }
// function circle() {
//     var elements = document.querySelectorAll(".square");
//     elements.forEach((element) =>element.classList.add("shapeCircle"));
//     elements.forEach((element) =>element.classList.remove("shapeSquare"));
//     elements.forEach((element) =>element.classList.remove("shapeRectangle"));
// }
// function rectangle() {
//     var elements = document.querySelectorAll(".square");
//     elements.forEach((element) =>element.classList.add("shapeRectangle"));
//     elements.forEach((element) =>element.classList.remove("shapeCircle"));
//     elements.forEach((element) =>element.classList.remove("shapeSquare"));
// }


// below code is no repeat code
function addClass(className) {
    var elements = document.querySelectorAll(".square");
    elements.forEach((element) =>element.classList.add(className));
  }
  
  function removeClasses(classNames) {
    var elements = document.querySelectorAll(".square");
    elements.forEach((element) => {
      classNames.forEach((className) => {
        element.classList.remove(className);
      });
    });
  }
  
  function red() {
    addClass("red");
    removeClasses(["yellow", "green"]);
  }
  
  function yellow() {
    addClass("yellow");
    removeClasses(["red", "green"]);
  }
  
  function green() {
    addClass("green");
    removeClasses(["yellow", "red"]);
  }
  
  function square() {
    addClass("shapeSquare");
    removeClasses(["shapeCircle", "shapeRectangle"]);
  }
  
  function circle() {
    addClass("shapeCircle");
    removeClasses(["shapeSquare", "shapeRectangle"]);
  }
  
  function rectangle() {
    addClass("shapeRectangle");
    removeClasses(["shapeCircle", "shapeSquare"]);
  }