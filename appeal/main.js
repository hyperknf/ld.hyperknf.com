let time = 0

function Invalid() {
    document.querySelector(".main").innerHTML = "Invalid or empty arguments"
}

function Submit() {
    const el = (ele) => document.querySelector(`.${ele}`)
    const inputs = [
        el("tag").value,
        el("id").value,
        el("reason").value,
        el("length").value,
        el("again").value,
        el("understand").value,
        el("else").value
    ]
    for (let i in inputs) if (String(inputs[i]).replaceAll(" ", "") == "") return Invalid()
    if (parseInt(inputs[1]) >= 3e18) return Invalid()
    
    const request = new XMLHttpRequest()
    request.open("POST", atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTEwMzI1NzMxOTM4ODc2MjE4Mi9jeVNkNWJkdnc5dG5jcC1vYVgwN0k3NXp4RVI2X1h2U296NllkVFp6YWFicU94blFIYnhDTkRRZmVQLVh3XzJrVmN6MQ=="))
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify({
        id: "1103259279974223902",
        content: "New appeal received",
        author: {
            bot: true,
            id: "1103257319388762182",
            username: "Ban Appeals",
            avatar: "8588ff5c8f759cbf74fe0e5ac7cfacf2",
            discriminator: "0000"
        },
        embeds: [
            {
                type: "rich",
                description: `**__User tag__**\n${inputs[0]}g\n**__User ID__**\n${inputs[1]}\n**__Ban reason__**\n${inputs[2]}\n**__Ban length__**\n${inputs[3]}\n**__Will do again?__**\n${inputs[4]}\n**__Understand punish if trolling__**\n${inputs[5]}\n**__Anything else?__**\n${inputs[6]}\n**__Time taken__**\n${time / 1000 > 10000000 ? ">10000" : time / 1000}s`,
                color: 16711680,
                footer: {
                    text: "From https://ld.hyperknf.com/appeal"
                }
            }
        ]
    }))
    localStorage.submitted = "true"
    window.location.reload()
}

const loop = setInterval(() => {
    time += 1000 / 30
    if (localStorage.submitted == "true") {
        const main = document.querySelector(".main")
        main.innerHTML = "Received your appeal, please be noted that you can only appeal once<br>You will not receive a reply, please attempt to join the server to know your status"
    }
}, 1000 / 30)
