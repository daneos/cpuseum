function replaceContent(url)
{
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, false);
	xmlhttp.send();
	document.getElementById("content").innerHTML = xmlhttp.responseText;
}