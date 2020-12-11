var dateDisplay = document.getElementById('dateDisplay');

var today = new Date();
var month = today.getMonth(); // Returns the current month
var year = today.getFullYear(); // Returns the current year

dateDisplay.innerText = month + '  ' + year;

//console.log(month, year); // Output: the current month and year