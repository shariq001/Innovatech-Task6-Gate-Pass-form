function deletTable() {
    let confirmResponse = confirm("Are you sure you want to delete this list?");
    let table1 = document.getElementById("table1");
    
    if (confirmResponse) {
        table1.style.display = "none"; // Hide the div if confirmed
        alert("List deleted!");
    } else {
        alert("Action canceled!");
    }
}

function openDialog() {
    let userInput = prompt("Add New Customer:");
    if (userInput !== '') {
        alert("Added Customer: " + userInput);
    }
}