let links = document.getElementsByClassName("url");

for (let i = 0; i < links.length; i++) {
	links[i].number = i;
	links[i].addEventListener("mouseup", openLink);
	links[i].onmousedown = function(e) {if (e.button==1) {return false}};

	if (i <= 2) {
		links[i].style.color = "blue";
	}

	if (i >= 1 && i <=4) {
		links[i].hover = false;
		links[i].click = false;
		links[i].addEventListener("mouseover", hover);
		links[i].addEventListener("mouseout", hover);
		links[i].addEventListener("mousedown", click);
		links[i].addEventListener("mouseup", click);
	}
}

function openLink(link) {
	let target = "404";

	switch (link.currentTarget.number) {
		case 0:
		case 1:
		case 3:
			target = "bio";
			break;
		case 2:
			target = "https://www.ajc.com/news/black-homeowner-had-white-friend-stand-in-for-third-appraisal-value-doubled/2M63SDYAPJHETED7ZJUKUNMXP4/";
			break;
		case 4:
			target = "resources";
	}

	switch (link.button) {
		case 0:
			window.location = target;
			break;
		case 1:
			window.open(target);
	}
}

function hover(link) {
	out = (link.currentTarget.number <= 2) ? "blue" : "white";
	over = (link.currentTarget.number <= 2) ? "deepskyblue" : "lightgray";

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