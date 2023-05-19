// // the following code is performed by taking a reference
(function () {
  document.addEventListener('DOMContentLoaded', function() {
    var table = document.querySelector('.index-output');
    var form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      var inputFields = event.target.querySelectorAll('input[type="text"], input[type="date"], input[type="email"], input[type="number"]');
      var data = [];

      inputFields.forEach(function(inputField) {
        var key = inputField.name;
        var value = inputField.value;
        var existingRow = table.querySelector('tr[data-key="' + key + '"]');
        if (existingRow) {
          existingRow.cells[1].textContent = value;
        } else {
          var row = table.insertRow();
          row.setAttribute('data-key', key);
          row.innerHTML = '<td>' + key + '</td><td>' + value + '</td>';
        }

        data.push({ key: key, value: value });
        inputField.value = '';
      });

      console.log(data);
    });
  });
})
();  