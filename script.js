const elements = document.getElementsByClassName("circle");

for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("animationend", function (e) {
		elements[i].classList.remove("animated");
	});

	elements[i].addEventListener("click", function (e) {
		elements[i].classList.add("animated");
	});
}
