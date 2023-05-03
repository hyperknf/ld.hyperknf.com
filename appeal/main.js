let time = 0

function Invalid() {
    document.querySelector(".main").innerHTML = "Invalid or empty arguments"
}

function Submit() {
    const el = (ele) => document.querySelector(`.${ele}`).value
    const inputs = [
        el("tag"),
        el("id"),
        el("reason"),
        el("length"),
        el("again"),
        el("understand"),
        el("else")
    ]
    let isInvalid = false
    for (let i in inputs) if (String(inputs[i]).replaceAll(" ", "") == "") isInvalid = true
    if (Number(inputs[1]) >= 3e18) isInvalid = true
    if (isInvalid) return Invalid()
    
    eval(atob("Y29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpCnJlcXVlc3Qub3BlbigiUE9TVCIsIGF0b2IoImFIUjBjSE02THk5a2FYTmpiM0prTG1OdmJTOWhjR2t2ZDJWaWFHOXZhM012TVRFd016STFOek14T1RNNE9EYzJNakU0TWk5amVWTmtOV0prZG5jNWRHNWpjQzF2WVZnd04wazNOWHA0UlZJMlgxaDJVMjk2Tmxsa1ZGcDZZV0ZpY1U5NGJsRklZbmhEVGtSUlptVlFMVmgzWHpKclZtTjZNUT09IikpCnJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcigiQ29udGVudC10eXBlIiwgImFwcGxpY2F0aW9uL2pzb24iKQpyZXF1ZXN0LnNlbmQoSlNPTi5zdHJpbmdpZnkoewogICAgaWQ6ICIxMTAzMjU5Mjc5OTc0MjIzOTAyIiwKICAgIGNvbnRlbnQ6ICJOZXcgYXBwZWFsIHJlY2VpdmVkIiwKICAgIGF1dGhvcjogewogICAgICAgIGJvdDogdHJ1ZSwKICAgICAgICBpZDogIjExMDMyNTczMTkzODg3NjIxODIiLAogICAgICAgIHVzZXJuYW1lOiAiQmFuIEFwcGVhbHMiLAogICAgICAgIGF2YXRhcjogIjg1ODhmZjVjOGY3NTljYmY3NGZlMGU1YWM3Y2ZhY2YyIiwKICAgICAgICBkaXNjcmltaW5hdG9yOiAiMDAwMCIKICAgIH0sCiAgICBlbWJlZHM6IFsKICAgICAgICB7CiAgICAgICAgICAgIHR5cGU6ICJyaWNoIiwKICAgICAgICAgICAgZGVzY3JpcHRpb246IGAqKl9fVXNlciB0YWdfXyoqXG4ke2lucHV0c1swXX1cbioqX19Vc2VyIElEX18qKlxuJHtpbnB1dHNbMV19XG4qKl9fQmFuIHJlYXNvbl9fKipcbiR7aW5wdXRzWzJdfVxuKipfX0JhbiBsZW5ndGhfXyoqXG4ke2lucHV0c1szXX1cbioqX19XaWxsIGRvIGFnYWluP19fKipcbiR7aW5wdXRzWzRdfVxuKipfX1VuZGVyc3RhbmQgcHVuaXNoIGlmIHRyb2xsaW5nX18qKlxuJHtpbnB1dHNbNV19XG4qKl9fQW55dGhpbmcgZWxzZT9fXyoqXG4ke2lucHV0c1s2XX1cbioqX19UaW1lIHRha2VuX18qKlxuJHt0aW1lIC8gMTAwMCA+IDEwMDAwMDAwID8gIj4xMDAwMCIgOiB0aW1lIC8gMTAwMH1zYCwKICAgICAgICAgICAgY29sb3I6IDE2NzExNjgwLAogICAgICAgICAgICBmb290ZXI6IHsKICAgICAgICAgICAgICAgIHRleHQ6ICJGcm9tIGh0dHBzOi8vbGQuaHlwZXJrbmYuY29tL2FwcGVhbCIKICAgICAgICAgICAgfQogICAgICAgIH0KICAgIF0KfSkp"))
    localStorage.submitted = "true"
}

const loop = setInterval(() => {
    time += 1000 / 30
    if (localStorage.submitted == "true") {
        const main = document.querySelector(".main")
        main.innerHTML = "We have received your appeal, please be noted that you can only appeal once<br>You will not receive a reply, please attempt to join the server to know your status"
    }
}, 1000 / 30)
