const request = new XMLHttpRequest().open("GET", "https://requests.hyperknf.com/ld/rules").send()
while (!String(request.responseText).startsWith("{")) {}
document.querySelector(".main").innerHTML = JSON.parse(request.responseText).html

console.log("Script successfully loaded")
