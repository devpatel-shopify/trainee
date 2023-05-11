// Take Reference
(function() {
    const shapeButtons = document.querySelectorAll(".two button");
    const colorButtons = document.querySelectorAll(".one button");
    const transitionDropdown = document.getElementById("transition-dropdown");
    const valueDropdown = document.getElementById("value-dropdown");
    const square = document.querySelector(".square");

    // Define arrays of CSS classes for shapes and colors
    const shapeClasses = ["Square", "Circle", "Rectangle", "Oval"];
    const colorClasses = ["red", "yellow", "green", "blue"];

    // Function to handle button clicks
    function handleButtonClick(event) {
        const clickedButton = event.target;
        const isShapeButton = shapeClasses.indexOf(clickedButton.id) > -1;
        const isColorButton = colorClasses.indexOf(clickedButton.id) > -1;
        if (isShapeButton || isColorButton) {
            // Determine which class array to use
            const toggleClass = isShapeButton ? shapeClasses : colorClasses;
            // Toggle classes on the square element
            toggleClass.forEach((classItem) => {
                square.classList.toggle(classItem, classItem === clickedButton.id);
            });
            // Log the selected shape or color
            const selectionType = isShapeButton ? "shape" : "color";
            console.log(`Selected ${selectionType}: ${clickedButton.innerText}`);
        }
    }

    // Function to handle dropdown changes
    function handleDropdownChange(event) {
        if (event.target === transitionDropdown) {

            const seconds = parseFloat(transitionDropdown.value);
            square.style.transitionDuration = `${seconds}s`;

            console.log(`Selected transition: ${seconds} seconds`);
        } else if (event.target === valueDropdown) {

            const seconds = parseFloat(valueDropdown.value);
            square.style.transform = `rotate(${seconds}s)`;

            console.log(`Selected value: ${seconds} seconds`);
        }
    }

    // Add event listeners to shape and color buttons
    shapeButtons.forEach((shapeButton) => {
        shapeButton.addEventListener("click", handleButtonClick);
    });

    colorButtons.forEach((colorButton) => {
        colorButton.addEventListener("click", handleButtonClick);
    });

    // Add event listeners to dropdowns
    transitionDropdown.addEventListener("change", handleDropdownChange);
    valueDropdown.addEventListener("change", handleDropdownChange);
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





