// Take Reference
// As per the Comment
// Add 2 Dropdown, With value from 1 to 10
// Select Any Color And Shape
// One for "TimeOut"
// One for "Transition"
// recangle
// Value from first dropdown, Is for setting a delay to start transition
// Value from Second Dropdown, Is to set animation delay
// If Dropdown 1 : Has value 5
// Dropdown 2 : Has value 7
// Then your action will start after 5 second of clicking on anybutton (Color, Shape)
// And, it will be converted to respetive color and shape in 7 seconds, With smooth transition

(function() {
    const shapeButtons = document.querySelectorAll(".three button");
    const colorButtons = document.querySelectorAll(".two button");
    const squareElement = document.querySelector(".square");

    const shapeClasses = ["shapeSquare", "shapeCircle", "shapeRectangle", "shapeOval"];
    const colorClasses = ["colorRed", "colorYellow", "colorGreen", "colorBlue"];

    shapeButtons.forEach((shapeButton) => {
        shapeButton.addEventListener("click", function(event) {
            updateSquare(event, shapeButton.id);
        });
    });

    colorButtons.forEach((colorButton) => {
        colorButton.addEventListener("click", function(event) {
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

        setTimeout(function() {
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

})();



// (function() {
//   // 'use-strict'
//   const shapeButtons = document.querySelectorAll(".two button");
//   const colorButtons = document.querySelectorAll(".one button");

//   const shapeClasses = ["Square", "Circle", "Rectangle", "Oval"];
//   const colorClasses = ["red", "yellow", "green", "blue"];

//   shapeButtons.forEach((shapeButton) => {
//       console.log(this);
//       shapeButton.addEventListener("click", createlement);
//   });

//   colorButtons.forEach((colorButton) => {
//       colorButton.addEventListener("click", createlement);
//   });

//   function createlement(event) {
//       const element = document.querySelector(".square");
//       const clickedButton = event.target;
//       if (shapeClasses.indexOf(clickedButton.id) > -1) {

//           shapeClasses.forEach((shapeClass) => {
//               element.classList.toggle(shapeClass, shapeClass === clickedButton.id);
//           });

//           console.log("Selected shape: " + clickedButton.innerText);
//       }

//       if (colorClasses.indexOf(clickedButton.id) > -1) {
//           colorClasses.forEach((colorClass) => {
//               element.classList.toggle(colorClass, colorClass === clickedButton.id);
//           });
//           console.log("Selected color: " + clickedButton.innerText);
//       }
//   }
// })();




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





