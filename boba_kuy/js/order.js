const price = document.getElementById("price");
const authors = document.getElementById("authors");
const bookname = document.getElementById("bookname");
const modalAlert = document.getElementById("modalAlert");
const modalAlert2 = document.getElementById("modalAlert2");
const btnUpdate = document.getElementById("btnUpdate");
const statuss = document.getElementById("status");
const names = document.getElementById("name");

var check = "check";


btnUpdate.addEventListener('click', function() {
    if(names.value == "" || bookname.value == "" || price.value == "" || statuss.value == "") {
        modalAlert2.style.display = 'block'
        return;
    }

    window.location.href = 'aforderup.html'
})


const btnDeletes = document.getElementById("btnDeletes");

btnDeletes.addEventListener('click', function(){
    alert("This item has been deleted");
    window.location.href = 'aforderdel.html'
})





