const data = [];
const addButton = document.getElementById("addButton");
const displayButton = document.getElementById("displayButton");
const displayTableHeading = document.getElementById("displayTableHeading");

addButton.addEventListener("click", addData);
displayButton.addEventListener("click", showData);

function addData() {
    const inputs = document.querySelectorAll("input[type='text']");
    const input1 = inputs[0].value;
    const input2 = inputs[1].value;

    var obj = {};
    obj[input1] = input2;
    console.log(obj)

    data.push({ key: input1, value: input2 });
    clearInputs();
}

function showData() {
    const table = document.querySelector("#displayTable");
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

    displayTableHeading.classList.remove("hidden");

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