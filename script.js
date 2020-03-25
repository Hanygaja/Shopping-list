var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol");
/*
button.addEventListener("click", function() {
	if (input.value.length > 0)
    var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value))
	ul.appendChild(li)
	input.value = "";
});

input.addEventListener("keypress", function() {
	if (input.value.length > 0 && event.keyCode === 13)
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value))
		ul.appendChild(li)
		input.value = "";
})
*/

function inputLength() {
	return input.value.length > 0;
};

function createListElement() {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value))
		ol.appendChild(li)
		input.value = "";
}

function addListAfterClick(){
	if (inputLength()) {
		createListElement();
	}
}
function addListAfterKey() {
	if (inputLength() && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKey);