var Tbody = document.getElementById('tablebody');
Tbody.style.color = "white";
Tbody.style.border = "2px solid red";
Tbody.style.borderCollapse = "collapse";

var infoObject = {}; //creating an object
var OriginalArray = []; //creating an array

function AddRow() {
  var fname = document.getElementById('fname');
  var midname = document.getElementById('midname');
  var lname = document.getElementById('lname');
  var dob = document.getElementById('dob');
  var number = document.getElementById('number');
  var email = document.getElementById('email');

  // Check if the phone number already exists in the OriginalArray
  var isDataExists = OriginalArray.some(data => {
    return data.phonenumber === number.value;
  });

  if (isDataExists) {
    alert('This data already exists!');
    return; // Exit the function if the phone number already exists
  }

  infoObject = {
    fullname: `${fname.value} ${midname.value} ${lname.value}`,
    dob: dob.value,
    phonenumber: number.value,
    email: email.value
  }

  OriginalArray.push(infoObject);

  // Create a new row for the table
  var NewRow = document.createElement('tr');

  // Create cells for each column in the row
  var fnameCell = document.createElement('td');
  var dobCell = document.createElement('td');
  var numberCell = document.createElement('td');
  var emailCell = document.createElement('td');

  // Populate the cells with data
  fnameCell.innerHTML = infoObject.fullname;
  dobCell.innerHTML = infoObject.dob;
  numberCell.innerHTML = infoObject.phonenumber;
  emailCell.innerHTML = infoObject.email;

  // Add the cells to the row
  NewRow.appendChild(fnameCell);
  NewRow.appendChild(dobCell);
  NewRow.appendChild(numberCell);
  NewRow.appendChild(emailCell);

  // Add the row to the table body
  Tbody.appendChild(NewRow);
}

// Get the search input element
var searchInput = document.getElementById('search');

// Attach an event listener to the search input
searchInput.addEventListener('keyup', function(event) {
  // Get the search term
  var searchTerm = event.target.value.toLowerCase();

  // Loop through the rows in the table body
  for (var i = 0; i < Tbody.rows.length; i++) {
    var row = Tbody.rows[i];
    var fname = row.cells[0].textContent.toLowerCase();
    var dob = row.cells[1].textContent.toLowerCase();
    var number = row.cells[2].textContent.toLowerCase();
    var email = row.cells[3].textContent.toLowerCase();

    // Check if the row matches the search term
    if (fname.indexOf(searchTerm) > -1 || dob.indexOf(searchTerm) > -1 || number.indexOf(searchTerm) > -1 || email.indexOf(searchTerm) > -1) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
});
