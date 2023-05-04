// below code is writtn on the basis of following comments
// Please try to optimise it as much as possible.
// Now Try to call function without any parameter, As I explained yesterday.
// var color = YOU NEED TO GET COLOR VALUE OF SELECTED COLOR
// var shape = YOU NEED TO GET SHAPE VALUE OF SELECTED SHAPE

(function () {
  // 'use-strict'
const shapeButtons = document.querySelectorAll(".two button");
const colorButtons = document.querySelectorAll(".one button");

const shapeClasses = ["Square", "Circle", "Rectangle"];
const colorClasses = ["red", "yellow", "green"];        

shapeButtons.forEach((shapeButton) => {
  console.log(this);
  shapeButton.addEventListener("click", createlement);
});

colorButtons.forEach((colorButton) => {
  colorButton.addEventListener("click", createlement);
});

function createlement(event) {
  const element = document.querySelector(".square");
  const clickedButton = event.target;
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
})();







// Taken refrence 
// const changeElement = (value) => {
//   document.getElementById("asdf").style.backgroundColor = value;
//   const selectedElements = document.querySelectorAll(".asdf");
//   selectedElements.forEach((element) => {
//     element.classList.remove("shapeSquare", "shapeCircle", "shapeRectangle", "shapeoval");
//     element.classList.add(`shape${value}`);
//   });
// };
// console.log(changeElement.value);


// function myFunction(value) {
//     document.getElementById("asdf").style.backgroundColor = "value";
//   }

//   function myFunction1() {
//     document.getElementById("asdf").style.backgroundColor = "yellow";
//   }
//   function myFunction2() {
//     document.getElementById("asdf").style.backgroundColor = "green";
//   }
 
//   function square() {
//     var selectedElements = document.querySelectorAll(".asdf");
//     selectedElements.forEach((element) =>element.classList.add("shapeSquare"));
//     selectedElements.forEach((element) =>element.classList.remove("shapeCircle"));
//     selectedElements.forEach((element) =>element.classList.remove("shapeRectangle"));
// }
//   function circle() {
//     var selectedElements = document.querySelectorAll(".asdf");
//     selectedElements.forEach((element) =>element.classList.add("shapeCircle"));
//     selectedElements.forEach((element) =>element.classList.remove("shapeSquare"));
//     selectedElements.forEach((element) =>element.classList.remove("shapeRectangle"));
// }
// function rectangle() {
//     var selectedElements = document.querySelectorAll(".asdf");
//     selectedElements.forEach((element) =>element.classList.add("shapeRectangle"));
//     selectedElements.forEach((element) =>element.classList.remove("shapeSquare"));
//     selectedElements.forEach((element) =>element.classList.remove("shapeCircle"));
// }



// function updateSquare() {
//   var selectedElements = document.querySelectorAll(".square");
//   var shapeClasses = ["shapeSquare", "shapeCircle", "shapeRectangle"];
//   var colorClasses = ["red", "yellow", "green"];

//   var clickedButton = event.target;

//   if (shapeClasses.includes(clickedButton.id)) {
//     selectedElements.forEach((element) => {
//       shapeClasses.forEach((shapeClass) => {
//         element.classList.toggle(shapeClass, shapeClass === clickedButton.id);
//         console.log(clickedButton.id);
//       });
//     });
//   }

//   if (colorClasses.includes(clickedButton.id)) {
//     selectedElements.forEach((element) => {
//       colorClasses.forEach((colorClass) => {
//         element.classList.toggle(colorClass, colorClass === clickedButton.id);
//         console.log(clickedButton.id);
//       });
//     });
//   }
// }





