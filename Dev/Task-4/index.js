let data = [];
const addButton = document.getElementById("addButton");
const showButton = document.getElementById("showButton");
const dataTableHeading = document.getElementById("dataTableHeading");

addButton.addEventListener("click", addData);
showButton.addEventListener("click", showData);

function addData() {
    const inputs = document.querySelectorAll("input[type='text']");
    const input1 = inputs[0].value;
    const input2 = inputs[1].value;
    data.push([input1, input2]);
    clearInputs();
}

function showData() {
    const table = document.querySelector("#dataTable");
    table.innerHTML = "";

    // Create table header
    const headerRow = table.insertRow(0);
    const header1 = document.createElement("th");
    header1.textContent = "Data 1";
    headerRow.appendChild(header1);
    const header2 = document.createElement("th");
    header2.textContent = "Data 2";
    headerRow.appendChild(header2);

    // Populate table with data
    for (let i = 0; i < data.length; i++) {
        const row = table.insertRow(i + 1);
        const cell1 = row.insertCell(0);
        cell1.textContent = data[i][0];
        const cell2 = row.insertCell(1);
        cell2.textContent = data[i][1];
    }

    dataTableHeading.classList.remove("hidden");

    // Display data in the console
    console.log(data);
}

function clearInputs() {
    const inputs = document.querySelectorAll("input[type='text']");
    inputs.forEach(input => {
        input.value = "";
    });
}