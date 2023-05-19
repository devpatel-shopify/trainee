(function(){
    document.addEventListener("DOMContentLoaded", function() {
        var form = document.getElementById("infoForm");
        var dataTable = document.getElementById("dataTable");
        var userArray = []; // Array to store user data

        form.addEventListener("submit", function(event) {
            event.preventDefault();

            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var message = document.getElementById("message").value;

            var newRow = document.createElement("tr");
            newRow.innerHTML = "<td>" + name + "</td><td>" + email + "</td><td>" + message + "</td>";
            dataTable.appendChild(newRow);

            var user = {
                name: name,
                email: email,
                message: message
            };

            userArray.push(user); // Add user to the userArray

            console.log("User " + userArray.length + ":", user);

            form.reset();
        });
    });
})();
