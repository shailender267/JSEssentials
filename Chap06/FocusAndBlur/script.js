
var emailField = document.getElementById("email");

emailField.onfocus = function() {
	if ( emailField.value == "your email") {
		emailField.value = "";
	}
};

emailField.onblur = function() {
	if ( emailField.value == "") {
		emailField.value = "your email";
	}
};



var nameField = document.getElementById("name");

nameField.onfocus = function() {
	if ( nameField.value == "your name") {
		nameField.value = "";
	}
};

nameField.onblur = function() {
	if ( nameField.value == "") {
		nameField.value = "your name";
	}
};


var tourID = document.getElementById("tourID");

tourID.onfocus = function() {
	if ( tourID.value == "your tour name") {
		tourID.value = "";
	}
};

tourID.onblur = function() {
	if ( tourID.value == "") {
		tourID.value = "your tour name";
	}
};