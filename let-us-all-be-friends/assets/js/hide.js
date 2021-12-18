window.addEventListener("load", hide)

function hide() {
	document.getElementsByTagName("body")[0].style.cursor = "default";
	setTimeout(function() {document.getElementsByTagName("body")[0].style.cursor = "auto";}, 4000);
}