const request = new XMLHttpRequest()
request.addEventListener("load", () => document.querySelector(".main").innerHTML = JSON.parse(this.responseText).html)
request.open("GET", "https://requests.hyperknf.com/ld/rules")
request.send()

console.log("Script successfully loaded")
