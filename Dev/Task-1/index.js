// below code is writtn on the basis of following comments
// Please try to optimise it as much as possible.
// Now Try to call function without any parameter, As I explained yesterday.
// var color = YOU NEED TO GET COLOR VALUE OF SELECTED COLOR
// var shape = YOU NEED TO GET SHAPE VALUE OF SELECTED SHAPE

function createlement() {
  var selectedElements = document.querySelectorAll(".square");
  var shapeClasses = ["Square", "Circle", "Rectangle"];
  var colorClasses = ["red", "yellow", "green"];
  var clickedButton = event.target;

  if (shapeClasses.includes(clickedButton.id)) {
    selectedElements.forEach((selectedElement) => {
      shapeClasses.forEach((shapeClass) => {
        selectedElement.classList.toggle(shapeClass, shapeClass === clickedButton.id);
      });
    });
    console.log("Selected shape: " + clickedButton.innerText);
  }

  if (colorClasses.includes(clickedButton.id)) {
    selectedElements.forEach((selectedElement) => {
      colorClasses.forEach((colorClass) => {
        selectedElement.classList.toggle(colorClass, colorClass === clickedButton.id);
      });
    });
    console.log("Selected color: " + clickedButton.innerText);
  }
}

var shapeButtons = document.querySelectorAll(".shapes button");
var colorButtons = document.querySelectorAll(".colors button");

shapeButtons.forEach((button) => {
  button.addEventListener("click", updateSquare);
});

colorButtons.forEach((button) => {
  button.addEventListener("click", updateSquare);
});






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





