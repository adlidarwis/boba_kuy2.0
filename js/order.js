document.getElementById("uid").value = "";
  document.getElementById("accn").value = "";
  document.getElementById("name").value = "";
  document.getElementById("coba").value = "";
  document.getElementById("select").value = "";


function validasi1() {
    var price = document.getElementById("coba").value;
    var acc = document.getElementById("accn").value;
    var bookname = document.getElementById("name").value;
    var select = document.getElementById("select").value;
    if (price === "" || acc === "" || bookname === "" || select === "") {
        alert("Please input the correct data");
        return
    } else {
        save_order();
        return true;
    }
}


		        var tbMataKuliah = document.getElementById('tb_order');
		        var databaseRef = firebase.database().ref('order/');
		        var rowIndex = 1;
		        databaseRef.once('value', function (snapshot) {
		            snapshot.forEach(function (childSnapshot) {
		                var childKey = childSnapshot.key;
		                var childData = childSnapshot.val();
		                var row = tbMataKuliah.insertRow(rowIndex);
		                var cellId = row.insertCell(0);
		                var cellAcc = row.insertCell(1);
		                var cellNames = row.insertCell(2);
		                var cellPrices = row.insertCell(3);
                        var cellSelect = row.insertCell(4);
		                cellId.appendChild(document.createTextNode(childKey));
		                cellAcc.appendChild(document.createTextNode(childData.accn));
		                cellNames.appendChild(document.createTextNode(childData.name));
		                cellPrices.appendChild(document.createTextNode(childData.coba));
                        cellSelect.appendChild(document.createTextNode(childData.select));
		                var deleteButton = document.createElement("button");
          deleteButton.innerHTML = "Delete";
          // Assign a click event handler to the delete button
          deleteButton.addEventListener("click", function() {
            deleteTransaction(childKey); // Call a function to delete the transaction with the given childKey
          });

          // Append the delete button to the row as the last cell
          var deleteCell = row.insertCell(5);
          deleteCell.appendChild(deleteButton);

          rowIndex = rowIndex + 1;

		            });
		            var table = document.getElementById("tb_order");
		            var rows = table.getElementsByTagName("tr");
		            for (i = 0; i < rows.length; i++) {
		                var currentRow = table.rows[i];
		                var createClickHandler = function (row) {
		                    return function () {
		                        var cell1 = row.getElementsByTagName("td")[0];
		                        var cell2 = row.getElementsByTagName("td")[1];
		                        var cell3 = row.getElementsByTagName("td")[2];
		                        var cell4 = row.getElementsByTagName("td")[3];
                                var cell5 = row.getElementsByTagName("td")[4];
		                        var id = cell1.innerHTML;
		                        var acc = cell2.innerHTML;
		                        var names = cell3.innerHTML;
		                        var prices = cell4.innerHTML;
                                var select = cell5.innerHTML;
		                        document.getElementById('uid1').value = id;
		                        document.getElementById('acc1').value = acc;
		                        document.getElementById('names1').value = names;
		                        document.getElementById('prices1').value = prices;
                                document.getElementById('select1').value = select;
		                    };
		                };
		                currentRow.onclick = createClickHandler(currentRow);
		            }
		        });

				
		        
		        var databaseRef = firebase.database().ref('order/');
		        function save_order() {
		            var acc = document.getElementById('accn').value;
		            var names = document.getElementById('name').value;
		            var prices = document.getElementById('coba').value;
		            var select= document.getElementById('select').value;
		            var uid = firebase.database().ref().child('order').push().key;
		            var data = {
		                accn: acc,
		                name: names,
		                coba: prices,
                        select: select
		                
		            }
		            
		            var updates = {};
		            updates['/order/' + uid] = data;
		            firebase.database().ref().update(updates);
		            alert('New Order has been created successfully!');
		            reload_page();
                    
		        }
		        function reload_page() {
		            window.location.reload();
		        }

				function update_order() {
					var kode = document.getElementById('acc1').value;
					var sks = document.getElementById('names1').value;
					var nama = document.getElementById('prices1').value;
					var select = document.getElementById('select1').value;
					var uid = document.getElementById('uid1').value;
					var data = {
						accn: kode,
		                name: sks ,
		                coba: nama,
		                select: select
					}
					var updates = {};
					updates['/order/' + uid] = data;
					firebase.database().ref().update(updates);
					alert('order has been updated successfully!');
					reload_page();
				}

                function deleteTransaction(childKey) {
                    // Replace '/Transaction/' with the appropriate reference to your Firebase transaction node
                    firebase.database().ref('order/' + childKey).remove()
                      .then(function() {
                        alert('Transaction deleted successfully!');
                        location.reload(); // Reload the page after deletion
                      })
                      .catch(function(error) {
                        console.log('Transaction deletion failed: ' + error.message);
                      });
                  }
		    





