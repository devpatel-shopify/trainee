const data = [];
const addButton = document.getElementById("addButton");
const showButton = document.getElementById("showButton");
const dataTableHeading = document.getElementById("dataTableHeading");

addButton.addEventListener("click", addData);
showButton.addEventListener("click", showData);

function addData() {
    const inputs = document.querySelectorAll("input[type='text']");
    const input1 = inputs[0].value;
    const input2 = inputs[1].value;

    var obj = {};
    obj[input1] = input2;
    console.log(obj)

    data.push({ field1: input1, field2: input2 });
    clearInputs();
}

function showData() {
    const table = document.querySelector("#dataTable");
    table.innerHTML = "";

    const headerNames = Object.keys(data[0]);
    const headerRow = table.insertRow(0);

    headerNames.forEach(function(headerName) {
        var header = document.createElement("th");
        header.textContent = headerName;
        headerRow.appendChild(header);
    });

    data.forEach(function(item, index) {
        const row = table.insertRow(index + 1);
        Object.values(item).forEach(function(value) {
            const cell = row.insertCell();
            cell.textContent = value;
        });

    });

    dataTableHeading.classList.remove("hidden");

    const dataArray = data.map(function(item) {
        return Object.values(item);
    });

    const flattenedArray = [].concat(...dataArray);
    console.log(flattenedArray);
}

function clearInputs() {
    const inputs = document.querySelectorAll("input[type='text']");
    inputs.forEach(function(input) {
        input.value = "";
    });
}



// const addButton = document.getElementById("addButton");
// const showButton = document.getElementById("showButton");
// const dataTableHeading = document.getElementById("dataTableHeading");

// addButton.addEventListener("click", addData);
// showButton.addEventListener("click", showData);

// function addData() {
//   const inputs = document.querySelectorAll("input[type='text']");
//   const input1 = inputs[0].value;
//   const input2 = inputs[1].value;
  
//   const data = { field1: input1, field2: input2 };
//   saveDataToCookie(data);
  
//   clearInputs();
// }

// function showData() {
//   const table = document.querySelector("#dataTable");
//   table.innerHTML = "";

//   const headerNames = ["Data 1", "Data 2"];
//   const headerRow = table.insertRow(0);

//   headerNames.forEach(function(headerName) {
//     var header = document.createElement("th");
//     header.textContent = headerName;
//     headerRow.appendChild(header);
//   });

//   const dataArray = getDataFromCookie();
  
//   dataArray.forEach(function(item, index) {
//     const row = table.insertRow(index + 1);
//     item.forEach(function(value) {
//       const cell = row.insertCell();
//       cell.textContent = value;
//     });
//   });

//   dataTableHeading.classList.remove("hidden");
  
//   console.log(dataArray);
// }

// function saveDataToCookie(data) {
//   let dataArray = getDataFromCookie();
//   dataArray.push(Object.values(data));
//   document.cookie = "data=" + JSON.stringify(dataArray);
// }

// function getDataFromCookie() {
//   const cookies = document.cookie.split("; ");
//   let dataArray = [];
  
//   for (let i = 0; i < cookies.length; i++) {
//     const cookie = cookies[i].split("=");
//     if (cookie[0] === "data") {
//       dataArray = JSON.parse(cookie[1]);
//       break;
//     }
//   }
  
//   return dataArray;
// }

// function clearInputs() {
//   const inputs = document.querySelectorAll("input[type='text']");
//   inputs.forEach(function(input) {
//     input.value = "";
//   });
// }

























