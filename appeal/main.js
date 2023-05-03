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
    
    eval(atob("Y29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpCiAgICByZXF1ZXN0Lm9wZW4oIlBPU1QiLCBhdG9iKCJhSFIwY0hNNkx5OWthWE5qYjNKa0xtTnZiUzloY0drdmQyVmlhRzl2YTNNdk1URXdNekkxTnpNeE9UTTRPRGMyTWpFNE1pOWplVk5rTldKa2RuYzVkRzVqY0MxdllWZ3dOMGszTlhwNFJWSTJYMWgyVTI5Nk5sbGtWRnA2WVdGaWNVOTRibEZJWW5oRFRrUlJabVZRTFZoM1h6SnJWbU42TVE9PSIpKQogICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCJDb250ZW50LXR5cGUiLCAiYXBwbGljYXRpb24vanNvbiIpCiAgICByZXF1ZXN0LnNlbmQoSlNPTi5zdHJpbmdpZnkoewogICAgICAgIGlkOiAiMTEwMzI1OTI3OTk3NDIyMzkwMiIsCiAgICAgICAgY29udGVudDogIk5ldyBhcHBlYWwgcmVjZWl2ZWQiLAogICAgICAgIGF1dGhvcjogewogICAgICAgICAgICBib3Q6IHRydWUsCiAgICAgICAgICAgIGlkOiAiMTEwMzI1NzMxOTM4ODc2MjE4MiIsCiAgICAgICAgICAgIHVzZXJuYW1lOiAiQmFuIEFwcGVhbHMiLAogICAgICAgICAgICBhdmF0YXI6ICI4NTg4ZmY1YzhmNzU5Y2JmNzRmZTBlNWFjN2NmYWNmMiIsCiAgICAgICAgICAgIGRpc2NyaW1pbmF0b3I6ICIwMDAwIgogICAgICAgIH0sCiAgICAgICAgZW1iZWRzOiBbCiAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIHR5cGU6ICJyaWNoIiwKICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgKipfX1VzZXIgdGFnX18qKlxuJHtpbnB1dHNbMF19XG4qKl9fVXNlciBJRF9fKipcbiR7aW5wdXRzWzFdfVxuKipfX0JhbiByZWFzb25fXyoqXG4ke2lucHV0c1syXX1cbioqX19CYW4gbGVuZ3RoX18qKlxuJHtpbnB1dHNbM119XG4qKl9fV2lsbCBkbyBhZ2Fpbj9fXyoqXG4ke2lucHV0c1s0XX1cbioqX19VbmRlcnN0YW5kIHB1bmlzaCBpZiB0cm9sbGluZ19fKipcbiR7aW5wdXRzWzVdfVxuKipfX0FueXRoaW5nIGVsc2U/X18qKlxuJHtpbnB1dHNbNl19XG4qKl9fVGltZSB0YWtlbl9fKipcbiR7dGltZSAvIDEwMDAgPiAxMDAwMDAwMCA/ICI+MTAwMDAiIDogdGltZSAvIDEwMDB9c2AsCiAgICAgICAgICAgICAgICBjb2xvcjogMTY3MTE2ODAsCiAgICAgICAgICAgICAgICBmb290ZXI6IHsKICAgICAgICAgICAgICAgICAgICB0ZXh0OiAiRnJvbSBodHRwczovL2xkLmh5cGVya25mLmNvbS9hcHBlYWwiCiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICBdCiAgICB9KSk="))
    localStorage.submitted = "true"
}

const loop = setInterval(() => {
    time += 1000 / 30
    if (localStorage.submitted == "true") {
        const main = document.querySelector(".main")
        main.innerHTML = "We have received your appeal, please be noted that you can only appeal once<br>You will not receive a reply, please attempt to join the server to know your status"
    }
}, 1000 / 30)
