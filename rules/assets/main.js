const request = new XMLHttpRequest().open("GET", "https://requests.hyperknf.com/ld/rules").send()
while (!JSON.stringify(request.responseText).startsWith("{")) {
    console.log("Ping")
}
document.querySelector(".main").innerHTML = JSON.parse(request.responseText).html

console.log("Script successfully loaded")
