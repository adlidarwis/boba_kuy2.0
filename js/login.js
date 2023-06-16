// const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const email = document.getElementById("email");


function validateForm() {
    var form = document.forms[0];
    var email = form.email.value;

    var emailRegex = /^\S+@\S+\.\S+$/; // regular expression for a valid email address

    if (email == "") {
        alert("Please enter your email");
        return false;
    } else if (!email.match(emailRegex)) {
        alert("Please enter a valid email address");
        return false;

    } else {
        location.assign = "index.html";
    }

    // more validation checks here

    // if all checks pass
    return true;
}


document.getElementById("signIn").addEventListener("submit",function(event){
	event.preventDefault();
	var email=document.getElementById("email").value;
	var password=document.getElementById("password").value;
    console.log(email+password)
	firebase.auth().signInWithEmailAndPassword(email,password).then(function () {
	window.location.href="admin.html";
	}).catch(function (error) {
	var errorMessage=error.message;
	alert(errorMessage);
	});
	}
);