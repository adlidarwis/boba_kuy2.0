document.getElementById("uid").value = "";
  document.getElementById("authors").value = "";
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";


function validasi() {
    var price = document.getElementById("price").value;
    var authors = document.getElementById("authors").value;
    var bookname = document.getElementById("name").value;
    if (price === "" || authors === "" || bookname === "") {
        alert("Please input the correct data");
        return
    } else {
        save_book();
        return true;
    }
}

		        var tbMataKuliah = document.getElementById('tb_book');
		        var databaseRef = firebase.database().ref('book/');
		        var rowIndex = 1;
		        databaseRef.once('value', function (snapshot) {
		            snapshot.forEach(function (childSnapshot) {
		                var childKey = childSnapshot.key;
		                var childData = childSnapshot.val();
		                var row = tbMataKuliah.insertRow(rowIndex);
		                var cellId = row.insertCell(0);
		                var cellAuthors = row.insertCell(1);
		                var cellName = row.insertCell(2);
		                var cellPrice = row.insertCell(3);

					console.log(childData.price); 	 	
		                cellId.appendChild(document.createTextNode(childKey));
		                cellAuthors.appendChild(document.createTextNode(childData.authors));
		                cellName.appendChild(document.createTextNode(childData.name));
		                cellPrice.appendChild(document.createTextNode(childData.price));
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
		            var table = document.getElementById("tb_book");
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
		                        var authors = cell2.innerHTML;
		                        var name = cell3.innerHTML;
		                        var price = cell4.innerHTML;
		                        document.getElementById('uid1').value = id;
		                        document.getElementById('authors1').value = authors;
		                        document.getElementById('name1').value = name;
		                        document.getElementById('price1').value = price;
		                    };
		                };
		                currentRow.onclick = createClickHandler(currentRow);
		            }
		        });
		        
		        var databaseRef = firebase.database().ref('book/');
		        function save_book() {
					var authors = document.getElementById('authors').value;
		            var name = document.getElementById('name').value;
		            var price = document.getElementById('price').value;
		            var uid = firebase.database().ref().child('book').push().key;
		            var data = {
		                authors: authors,
		                name: name,
		                price: price,
		            }
		            
		            var updates = {};
		            updates['/book/' + uid] = data;
		            firebase.database().ref().update(updates);
		            alert('New Book has been created successfully!');
		            reload_page();
		            console.log(url);
		            document.querySelector('input[type="file"]').src = url;
		            
		            
		            
					
		        }
		        function reload_page() {
		            window.location.reload();
		        }
				function update_book() {
					var kode = document.getElementById('authors1').value;
					var sks = document.getElementById('name1').value;
					var nama = document.getElementById('price1').value;
					var uid = document.getElementById('uid1').value;
					var data = {
						authors: kode,
		                name: sks ,
		                price: nama
					}
					var updates = {};
					updates['/book/' + uid] = data;
					firebase.database().ref().update(updates);
					alert('Book has been updated successfully!');
					reload_page();
				}
                function deleteTransaction(childKey) {
                    // Replace '/Transaction/' with the appropriate reference to your Firebase transaction node
                    firebase.database().ref('book/' + childKey).remove()
                      .then(function() {
                        alert('Transaction deleted successfully!');
                        location.reload(); // Reload the page after deletion
                      })
                      .catch(function(error) {
                        console.log('Transaction deletion failed: ' + error.message);
                      });
                  }
		    


