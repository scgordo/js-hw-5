alert('Today only! Sign up for a 12-month subscription cycle of your personal code monkey and get your first month free, as well as 10% off each month for your first year!');

function usernameParams() {
	// add a para explaining username requirements
	var para = document.createElement("P");
	var userNameText = document.createTextNode("Username must be at least 5 characters long");
	para.appendChild(userNameText);
	var newNode = document.getElementById("signupForm");
	newNode.appendChild(para);
}

function passParams() {
	// add a para explaining password requirements
	var para = document.createElement("P");
	var passText = document.createTextNode("Password must be at least 8 characters long");
	para.appendChild(passText);
	var newNode = document.getElementById("signupForm");
	newNode.appendChild(para);
}

function matchPasswords() {
	// create text node that passwords must match
	var para = document.createElement("P");
	var passText = document.createTextNode("Passwords must match");
	para.appendChild(passText);
	var newNode = document.getElementById("signupForm");
	newNode.appendChild(para);	
}

function clearNewNodes() {
	// function to remove the nodes created on focus
	var myForm = document.getElementById("signupForm");
	var myParas = myForm.getElementsByTagName("P");
	for (var i=0; i < myParas.length; i++) {
		myForm.removeChild(myParas[i]);
	}
}

function validateForm() {
	var userName = document.getElementById("userName").value;
	var pass1 = document.getElementById("pass1").value;
	var pass2 = document.getElementById("pass2").value;
	var terms = document.getElementById("terms").value;
	console.log("pass1: " + pass1);
	console.log("pass2: " + pass2);
	console.log(document.getElementById("terms").checked);
	if (pass1 != pass2) {
		alert("Password fields must be identical. Please try again with a verified password");
	}
	
	if (pass1.length < 8 && pass2.length < 8) {
		alert("Password must be at least 8 characters long. Please try again with a valid password.");
	}
	
	if (userName.value.length < 5) {
		alert("User Name must be at least 5 characters long. Please try again with a valid User Name.");
	}
}

// I could only validate my checkbox with jQuery!
$('#myButton').click(function () {
    if (!$('#terms').is(':checked')) {
        alert('You must agree to the terms first.');
        return false;
    }
});