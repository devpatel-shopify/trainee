function myFunction() {
    document.getElementById("asdf").style.backgroundColor = "red";
  }

  function myFunction1() {
    document.getElementById("asdf").style.backgroundColor = "yellow";
  }
  function myFunction2() {
    document.getElementById("asdf").style.backgroundColor = "green";
  }

  function square() {
    var elements = document.querySelectorAll(".asdf");
    elements.forEach((element) =>element.classList.add("shapeSquare"));
    elements.forEach((element) =>element.classList.remove("shapeCircle"));
    elements.forEach((element) =>element.classList.remove("shapeRectangle"));
}
  function circle() {
    var elements = document.querySelectorAll(".asdf");
    elements.forEach((element) =>element.classList.add("shapeCircle"));
    elements.forEach((element) =>element.classList.remove("shapeSquare"));
    elements.forEach((element) =>element.classList.remove("shapeRectangle"));
}
function rectangle() {
    var elements = document.querySelectorAll(".asdf");
    elements.forEach((element) =>element.classList.add("shapeRectangle"));
    elements.forEach((element) =>element.classList.remove("shapeSquare"));
    elements.forEach((element) =>element.classList.remove("shapeCircle"));
}

