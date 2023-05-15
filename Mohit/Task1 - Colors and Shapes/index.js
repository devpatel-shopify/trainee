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
// const shapeButtons = document.querySelectorAll(".shapes button");
// const colorButtons = document.querySelectorAll(".colors button");

// const shapeClasses = ["shapeSquare", "shapeCircle", "shapeRectangle", "shapeOval"];
// const colorClasses = ["colorRed", "colorYellow", "colorGreen", "colorBlue"];

// shapeButtons.forEach((shapeButton) => {
//   shapeButton.addEventListener("click", function() {
//     updateSquare(event, shapeButton.id);
//   });
// });

// colorButtons.forEach((colorButton) => {
//   colorButton.addEventListener("click", function() {
//     updateSquare(event, colorButton.id);
//   });
// });

// function updateSquare(event, buttonId) {
//   const element = document.querySelector(".square");
//   const clickedButton = document.getElementById(buttonId);
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






// below code is created with following conditions(taking reference)
// Add 2 Dropdown, With value from 1 to 10
// One for "TimeOut"
// One for "Transition"
// Value from first dropdown, Is for setting a delay to start transition
// Value from Second Dropdown, Is to set animation delay
// If Dropdown 1 : Has value 5
// Dropdown 2 : Has value 7
// Then your action will start after 5 second of clicking on anybutton (Color, Shape)
// And, it will be converted to respetive color and shape in 7 seconds, With smooth transition

// const shapeButtons = document.querySelectorAll(".shapes button");
// const colorButtons = document.querySelectorAll(".colors button");
// const squareElement = document.querySelector(".square");

// const shapeClasses = ["shapeSquare", "shapeCircle", "shapeRectangle", "shapeOval"];
// const colorClasses = ["colorRed", "colorYellow", "colorGreen", "colorBlue"];

// shapeButtons.forEach((shapeButton) => {
//   shapeButton.addEventListener("click", function(event) {
//     updateSquare(event, shapeButton.id);
//   });
// });

// colorButtons.forEach((colorButton) => {
//   colorButton.addEventListener("click", function(event) {
//     updateSquare(event, colorButton.id);
//   });
// });

// function updateSquare(event, buttonId) {
//   const clickedButton = document.getElementById(buttonId);
//   let timeoutValue = parseInt(document.getElementById("timeout").value);
//   let transitionValue = parseInt(document.getElementById("transition").value);

//   setTimeout(function() {
//     if (shapeClasses.indexOf(clickedButton.id) > -1) {
//       shapeClasses.forEach((shapeClass) => {
//         squareElement.classList.toggle(shapeClass, shapeClass === clickedButton.id);
//       });
//       console.log("Selected shape: " + clickedButton.innerText);
//     }

//     if (colorClasses.indexOf(clickedButton.id) > -1) {
//       colorClasses.forEach((colorClass) => {
//         squareElement.classList.toggle(colorClass, colorClass === clickedButton.id);
//       });
//       console.log("Selected color: " + clickedButton.innerText);
//     }
//   }, timeoutValue * 1000);

//   squareElement.style.transition = `background-color ${transitionValue}s, border-radius ${transitionValue}s`;
// }








// below code is created with following conditions(taking reference)
// Add 2 Dropdown, With value from 1 to 10
// One for "TimeOut"
// One for "Transition"
// Value from first dropdown, Is for setting a delay to start transition
// Value from Second Dropdown, Is to set animation delay
// If Dropdown 1 : Has value 5
// Dropdown 2 : Has value 7
// Then your action will start after 5 second of clicking on anybutton (Color, Shape)
// And, it will be converted to respetive color and shape in 7 seconds, With smooth transition 
// also if both timeout and transition are of equal value the transition time should be the addition of both value of timeout and transition


const shapeButtons = document.querySelectorAll(".shapes button");
const colorButtons = document.querySelectorAll(".colors button");
const squareElement = document.querySelector(".square");

const shapeClasses = ["shapeSquare", "shapeCircle", "shapeRectangle", "shapeOval"];
const colorClasses = ["colorRed", "colorYellow", "colorGreen", "colorBlue"];

shapeButtons.forEach((shapeButton) => {
  shapeButton.addEventListener("click", function (event) {
    updateSquare(event, shapeButton.id);
  });
});

colorButtons.forEach((colorButton) => {
  colorButton.addEventListener("click", function (event) {
    updateSquare(event, colorButton.id);
  });
});

function updateSquare(event, buttonId) {
  const clickedButton = document.getElementById(buttonId);
  let timeoutValue = parseInt(document.getElementById("timeout").value);
  let transitionValue = parseInt(document.getElementById("transition").value);
  let overallTransitionValue = transitionValue;

  if (timeoutValue === transitionValue) {
    overallTransitionValue += timeoutValue;
  }

  setTimeout(function () {
    squareElement.style.transition = `background-color ${overallTransitionValue}s, border-radius ${overallTransitionValue}s, width ${overallTransitionValue}s, height ${overallTransitionValue}s`;

    if (shapeClasses.indexOf(clickedButton.id) > -1) {
      shapeClasses.forEach((shapeClass) => {
        squareElement.classList.toggle(shapeClass, shapeClass === clickedButton.id);
      });
      console.log("Selected shape: " + clickedButton.innerText);
    }

    if (colorClasses.indexOf(clickedButton.id) > -1) {
      colorClasses.forEach((colorClass) => {
        squareElement.classList.toggle(colorClass, colorClass === clickedButton.id);
      });
      console.log("Selected color: " + clickedButton.innerText);
    }
  }, timeoutValue * 1000);
}
