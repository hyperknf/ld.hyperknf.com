const request = new XMLHttpRequest()
request.open("GET", "https://requests.hyperknf.com/ld/rules")
request.send()
while (!JSON.stringify(request.responseText).startsWith("{")) {}
while (true) {}
document.querySelector(".main").innerHTML = JSON.parse(request.responseText).html

console.log("Script successfully loaded")
