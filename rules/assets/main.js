const request = new XMLHttpRequest()
request.open("GET", "https://requests.hyperknf.com/ld/rules")
request.send()
setInterval(() => (document.querySelector(".main").innerHTML = JSON.parse((()=>request.responseText))().html), 100)

console.log("Script successfully loaded")
