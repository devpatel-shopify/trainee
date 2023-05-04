// // normal code below 
// // function red() {
// //     var elements = document.querySelectorAll(".square");
// //     elements.forEach((element) =>element.classList.add("red"));
// //     elements.forEach((element) =>element.classList.remove("yellow"));
// //     elements.forEach((element) =>element.classList.remove("green"));
// // } 
// // function yellow() {
// //     var elements = document.querySelectorAll(".square");
// //     elements.forEach((element) =>element.classList.add("yellow"));
// //     elements.forEach((element) =>element.classList.remove("red"));
// //     elements.forEach((element) =>element.classList.remove("green"));
// // }
// // function green() {
// //     var elements = document.querySelectorAll(".square");
// //     elements.forEach((element) =>element.classList.add("green"));
// //     elements.forEach((element) =>element.classList.remove("yellow"));
// //     elements.forEach((element) =>element.classList.remove("red"));
// // }
// // function square() {
// //     var elements = document.querySelectorAll(".square");
// //     elements.forEach((element) =>element.classList.add("shapeSquare"));
// //     elements.forEach((element) =>element.classList.remove("shapeCircle"));
// //     elements.forEach((element) =>element.classList.remove("shapeRectangle"));
// // }
// // function circle() {
// //     var elements = document.querySelectorAll(".square");
// //     elements.forEach((element) =>element.classList.add("shapeCircle"));
// //     elements.forEach((element) =>element.classList.remove("shapeSquare"));
// //     elements.forEach((element) =>element.classList.remove("shapeRectangle"));
// // }
// // function rectangle() {
// //     var elements = document.querySelectorAll(".square");
// //     elements.forEach((element) =>element.classList.add("shapeRectangle"));
// //     elements.forEach((element) =>element.classList.remove("shapeCircle"));
// //     elements.forEach((element) =>element.classList.remove("shapeSquare"));
// // }


// // below code is no repeat code
// // function addClass(className) {
// //     var elements = document.querySelectorAll(".square");
// //     elements.forEach((element) =>element.classList.add(className));
// //   }

// //   function removeClasses(classNames) {
// //     var elements = document.querySelectorAll(".square");
// //     elements.forEach((element) => {
// //       classNames.forEach((className) => {
// //         element.classList.remove(className);
// //       });
// //     });
// //   }

// //   function red() {
// //     addClass("red");
// //     removeClasses(["yellow", "green"]);
// //   }

// //   function yellow() {
// //     addClass("yellow");
// //     removeClasses(["red", "green"]);
// //   }

// //   function green() {
// //     addClass("green");
// //     removeClasses(["yellow", "red"]);
// //   }

// //   function square() {
// //     addClass("shapeSquare");
// //     removeClasses(["shapeCircle", "shapeRectangle"]);
// //   }

// //   function circle() {
// //     addClass("shapeCircle");
// //     removeClasses(["shapeSquare", "shapeRectangle"]);
// //   }

// //   function rectangle() {
// //     addClass("shapeRectangle");
// //     removeClasses(["shapeCircle", "shapeSquare"]);
// //   }

//completed the below code by taking reference
// function updateSquare(className) {
//   var elements = document.querySelectorAll(".square");
//   var shapeClasses = ["shapeSquare", "shapeCircle", "shapeRectangle"];
//   var colorClasses = ["red", "yellow", "green"];

//   if (shapeClasses.includes(className)) {
//     elements.forEach((element) => {
//       shapeClasses.forEach((shapeClass) => {
//         element.classList.toggle(shapeClass, shapeClass === className);
//       });
//     });
//   }

//   if (colorClasses.includes(className)) {
//     elements.forEach((element) => {
//       colorClasses.forEach((colorClass) => {
//         element.classList.toggle(colorClass, colorClass === className);
//       });
//     });
//   }
// }



// Below code is wriiten on the Basis of following comments (taking refference):- 
// Please try to optimise it as much as possible.
// Now Try to call function without any parameter. 
// var color = YOU NEED TO GET COLOR VALUE OF SELECTED COLOR
// var shape = YOU NEED TO GET SHAPE VALUE OF SELECTED SHAPE
// IIFE

// (function () {
// 'use-strict'

// const shapeButtons = document.querySelectorAll(".shapes button");
// const colorButtons = document.querySelectorAll(".colors button");

// const shapeClasses = ["shapeSquare", "shapeCircle", "shapeRectangle"];
// const colorClasses = ["colorRed", "colorYellow", "colorGreen"];

// shapeButtons.forEach((shapeButton) => {
//   console.log(this);
//   shapeButton.addEventListener("click", updateSquare);
// });

// colorButtons.forEach((colorButton) => {
//   colorButton.addEventListener("click", updateSquare);
// });

// function updateSquare(event) {
//   const element = document.querySelector(".square");
//   const clickedButton = event.target;
//   if (shapeClasses.indexOf(clickedButton.id) > -1) {

//     shapeClasses.forEach((shapeClass) => {
//       element.classList.toggle(shapeClass, shapeClass === clickedButton.id);
//     });

//     console.log("Selected shape: " + clickedButton.innerText);
//   }

//   if (colorClasses.indexOf(clickedButton.id) > -1) {
//     colorClasses.forEach((colorClass) => {
//       element.classList.toggle(colorClass, colorClass === clickedButton.id);
//     });
//     console.log("Selected color: " + clickedButton.innerText);
//   }
// }
// })();






//below code is created with add-event-listener without passinng parameters(taking reference)     
const shapeButtons = document.querySelectorAll(".shapes button");
const colorButtons = document.querySelectorAll(".colors button");

const shapeClasses = ["shapeSquare", "shapeCircle", "shapeRectangle"];
const colorClasses = ["colorRed", "colorYellow", "colorGreen"];

shapeButtons.forEach((shapeButton) => {
  shapeButton.addEventListener("click", function() {
    updateSquare(event, shapeButton.id);
  });
});

colorButtons.forEach((colorButton) => {
  colorButton.addEventListener("click", function() {
    updateSquare(event, colorButton.id);
  });
});

function updateSquare(event, buttonId) {
  const element = document.querySelector(".square");
  const clickedButton = document.getElementById(buttonId);
  if (shapeClasses.indexOf(clickedButton.id) > -1) {

    shapeClasses.forEach((shapeClass) => {
      element.classList.toggle(shapeClass, shapeClass === clickedButton.id);
    });

    console.log("Selected shape: " + clickedButton.innerText);
  }

  if (colorClasses.indexOf(clickedButton.id) > -1) {
    colorClasses.forEach((colorClass) => {
      element.classList.toggle(colorClass, colorClass === clickedButton.id);
    });
    console.log("Selected color: " + clickedButton.innerText);
  }
}
