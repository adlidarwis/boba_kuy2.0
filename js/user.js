document.getElementById("uid").value = "";
document.getElementById("accn").value = "";
document.getElementById("email").value = "";
document.getElementById("pass").value = "";



function validasi2() {
  var email = document.getElementById("email").value;
  var accn = document.getElementById("accn").value;
  var pass= document.getElementById("pass").value;
  var emailRegex = /^\S+@\S+\.\S+$/; // regular expression for a valid email address
  if (email === "" || accn === "" || pass === "" ) {
      alert("Please input the correct data");
      return

  }
  else if
      (!email.match(emailRegex)) {
          alert("Please enter a valid email address");
          return false;
  } else {
      save_user();
      return true;
  }
}

              var tbMataKuliah = document.getElementById('tb_user');
              var databaseRef = firebase.database().ref('user/');
              var rowIndex = 1;
              databaseRef.once('value', function (snapshot) {
                  snapshot.forEach(function (childSnapshot) {
                      var childKey = childSnapshot.key;
                      var childData = childSnapshot.val();
                      var row = tbMataKuliah.insertRow(rowIndex);
                      var cellId = row.insertCell(0);
                      var cellAccn = row.insertCell(1);
                      var cellEmail = row.insertCell(2);
                      var cellPass = row.insertCell(3);
                      cellId.appendChild(document.createTextNode(childKey));
                      cellAccn.appendChild(document.createTextNode(childData.accn));
                      cellEmail.appendChild(document.createTextNode(childData.email));
                      cellPass.appendChild(document.createTextNode(childData.pass));
                      var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        // Assign a click event handler to the delete button
        deleteButton.addEventListener("click", function() {
          deleteTransaction(childKey); // Call a function to delete the transaction with the given childKey
        });

        // Append the delete button to the row as the last cell
        var deleteCell = row.insertCell(4);
        deleteCell.appendChild(deleteButton);

        rowIndex = rowIndex + 1;

                  });
                  var table = document.getElementById("tb_user");
                  var rows = table.getElementsByTagName("tr");
                  for (i = 0; i < rows.length; i++) {
                      var currentRow = table.rows[i];
                      var createClickHandler = function (row) {
                          return function () {
                              var cell1 = row.getElementsByTagName("td")[0];
                              var cell2 = row.getElementsByTagName("td")[1];
                              var cell3 = row.getElementsByTagName("td")[2];
                              var cell4 = row.getElementsByTagName("td")[3];
                              var id = cell1.innerHTML;
                              var accn = cell2.innerHTML;
                              var email = cell3.innerHTML;
                              var pass = cell4.innerHTML;
                              document.getElementById('uid1').value = id;
                              document.getElementById('accn1').value = accn;
                              document.getElementById('email1').value = email;
                              document.getElementById('pass1').value = pass;
                          };
                      };
                      currentRow.onclick = createClickHandler(currentRow);
                  }
              });
              
              var databaseRef = firebase.database().ref('user/');
              function save_user() {
                  var accn = document.getElementById('accn').value;
                  var email = document.getElementById('email').value;
                  var pass= document.getElementById('pass').value;
                  var uid = firebase.database().ref().child('user').push().key;
                  var data = {
                      accn: accn,
                      email: email,
                      pass: pass
                      
                  }
                  
                  var updates = {};
                  updates['/user/' + uid] = data;
                  firebase.database().ref().update(updates);
                  alert('New Account has been created successfully!');
                  reload_page();
                  
              }
              function reload_page() {
                  window.location.reload();
              }

              function update_user() {
                  var kode = document.getElementById('accn1').value;
                  var sks = document.getElementById('email1').value;
                  var pass = document.getElementById('pass1').value;
                  var uid = document.getElementById('uid1').value;
                  var data = {
                      accn: kode,
                      email: sks ,
                      pass: pass
                  }
                  var updates = {};
                  updates['/user/' + uid] = data;
                  firebase.database().ref().update(updates);
                  alert('Account has been updated successfully!');
                  reload_page();
              }

              function deleteTransaction(childKey) {
                  // Replace '/Transaction/' with the appropriate reference to your Firebase transaction node
                  firebase.database().ref('user/' + childKey).remove()
                    .then(function() {
                      alert('Transaction deleted successfully!');
                      location.reload(); // Reload the page after deletion
                    })
                    .catch(function(error) {
                      console.log('Transaction deletion failed: ' + error.message);
                    });
                }
          