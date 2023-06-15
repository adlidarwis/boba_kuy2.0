const price = document.getElementById("price");
const authors = document.getElementById("authors");
const bookname = document.getElementById("bookname");
const modalAlert = document.getElementById("modalAlert");
const modalAlert2 = document.getElementById("modalAlert2");
const btnUpdate = document.getElementById("btnUpdate");
const prices = document.getElementById("prices");
const authorss = document.getElementById("authorss");
const booknames = document.getElementById("booknames");
var check = "check";


btnUpdate.addEventListener('click', function() {
    if(authors.value == "" || bookname.value == "" || price.value == "") {
        modalAlert.style.display = 'block'
        return;
    }

    window.location.href = 'afbookup.html'
})

const btnAdd = document.getElementById("buttonAdd");

btnAdd.addEventListener('click', function() {
    if(authorss.value == "" || booknames.value == "" || prices.value == "") {
        modalAlert2.style.display = 'block'
        return;
    }
        window.location.href = 'afbookadd.html'
})

const btnDelete = document.getElementById("btnDelete");

btnDelete.addEventListener('click', function(){
    alert("This item has been deleted");
    window.location.href = 'afbookdel.html'
})



function validasi() {
    const price = document.getElementById("price").value;
    const authors = document.getElementById("authors").value;
    const bookname = document.getElementById("bookname").value;
    if (price === "" || authors === "" || bookname === "") {
        alert("Please input the correct data");
        return
    } else {
        alert("Data input is valid");
        return true;
    }
}

