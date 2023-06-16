
function validasi() {
  const price = document.getElementById("price").value;
  const authors = document.getElementById("authors").value;
  const bookname = document.getElementById("bookname").value;
  if ( price === null || authors === null || bookname === null) {
    alert("Please input the correct data");
  }
}

