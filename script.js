var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("button"); // create new button
	button.textContent = "remove";
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDoneLi(e) {
	// if you click the button inside the li, remove the parent of button, which is li from ul
	if (e.target && e.target.nodeName == 'BUTTON') {
		ul.removeChild(e.target.parentNode);
	// if you click the li element toggle done
	} else if (e.target && e.target.nodeName == 'LI') {
		e.target.classList.toggle("done");
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleDoneLi);