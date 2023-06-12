const request = new XMLHttpRequest().open("GET", "https://requests.hyperknf.com/ld/rules").setRequestHeader("Content-Type", "application/json").send(
    JSON.stringify({})
)
setInterval(() => {
    try {
        document.querySelector(".main").innerHTML = JSON.parse(request.responseText).html
    } catch (exceptiom) {
        console.log("Ping, data: " + JSON.stringify(request.responseText))
    }
}, 100)

console.log("Script successfully loaded")
