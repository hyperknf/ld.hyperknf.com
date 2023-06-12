const request = new XMLHttpRequest().open("GET", "https://requests.hyperknf.com/ld/rules").setRequestHeader("Content-Type", "application/json").send(
    JSON.stringify({})
)
while (!JSON.stringify(request.responseText).startsWith("{")) {
    console.log("Ping, data: " + JSON.stringify(request.responseText))
}
document.querySelector(".main").innerHTML = JSON.parse(request.responseText).html

console.log("Script successfully loaded")
