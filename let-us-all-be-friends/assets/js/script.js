let links = document.getElementsByClassName("url");

for (let i = 0; i < links.length; i++) {
	links[i].number = i;
	links[i].addEventListener("mouseup", openLink);
	links[i].onmousedown = function(e) {if (e.button==1) {return false}};

	if (i == 1) {
		links[i].style.color = "blue";
	}

	if (i >= 1 && i <=3) {
		links[i].hover = false;
		links[i].click = false;
		links[i].addEventListener("mouseover", hover);
		links[i].addEventListener("mouseout", hover);
		links[i].addEventListener("mousedown", click);
		links[i].addEventListener("mouseup", click);
	}
}

function openLink(link) {
	switch (link.button) {
		case 0:
			switch (link.currentTarget.number) {
				case 0:
				case 1:
				case 2:
					window.location = "bio";
					break;
				case 3:
					window.location = "resources";
					break;
				default:
					window.location = "404";
			}
			break;
		case 1:
			switch (link.currentTarget.number) {
				case 0:
				case 1:
				case 2:
					window.open("bio");
					break;
				case 3:
					window.open("resources");
					break;
				default:
					window.open("404");
			}
	}
}

function hover(link) {
	out = (link.currentTarget.number == 1) ? "blue" : "white";
	over = (link.currentTarget.number == 1) ? "deepskyblue" : "lightgray";

	if (link.currentTarget.hover) {
		link.currentTarget.style.color = out;
		link.currentTarget.hover = false;
		link.currentTarget.click = false;
	} else {
		link.currentTarget.style.color = over;
		link.currentTarget.hover = true;
	}
}

function click(link) {
	up = (link.currentTarget.number == 1) ? "blue" : "white";
	down = (link.currentTarget.number == 1) ? "lightskyblue" : "yellow";

	if (link.currentTarget.click) {
		link.currentTarget.style.color = up;
		link.currentTarget.click = false;
	} else {
		link.currentTarget.style.color = down;
		link.currentTarget.click = true;
	}
}