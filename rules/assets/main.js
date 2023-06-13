const request = new XMLHttpRequest()
request.open("GET", "https://requests.hyperknf.com/ld/rules")
request.setRequestHeader("Content-Type", "application/json")
request.send(JSON.stringify({}))
setInterval(() => {
    try {
        document.querySelector(".main").innerHTML = JSON.parse(request.responseText).html
    } catch (exception) {
        console.log("Ping, data: " + JSON.stringify(request.responseText))
    }
}, 100)

console.log("Script successfully loaded")
