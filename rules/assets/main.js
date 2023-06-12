(async()=>{
    const response = await fetch("https://requests.hyperknf.com/ld/rules")
    const json = await response.json()
    document.querySelector(".main").innerHTML = json.html
})()

console.log("Script successfully loaded")
