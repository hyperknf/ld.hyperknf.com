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
    
    eval(atob(atob("WTI5dWMzUWdjbVZ4ZFdWemRDQTlJRzVsZHlCWVRVeElkSFJ3VW1WeGRXVnpkQ2dwQ25KbGNYVmxjM1F1YjNCbGJpZ2lVRTlUVkNJc0lHRjBiMklvSW1GSVVqQmpTRTAyVEhrNWEyRllUbXBpTTBwclRHMU9kbUpUT1doalIydDJaREpXYVdGSE9YWmhNMDEyVFZSRmQwMTZTVEZPZWsxNFQxUk5ORTlFWXpKTmFrVTBUV2s1YW1WV1RtdE9WMHByWkc1ak5XUkhOV3BqUXpGMldWWm5kMDR3YXpOT1dIQTBVbFpKTWxneGFESlZNamsyVG14c2ExWkdjRFpaVjBacFkxVTVOR0pzUmtsWmJtaEVWR3RTVWxwdFZsRk1WbWd6V0hwS2NsWnRUalpOVVQwOUlpa3BDbkpsY1hWbGMzUXVjMlYwVW1WeGRXVnpkRWhsWVdSbGNpZ2lRMjl1ZEdWdWRDMTBlWEJsSWl3Z0ltRndjR3hwWTJGMGFXOXVMMnB6YjI0aUtRcHlaWEYxWlhOMExuTmxibVFvU2xOUFRpNXpkSEpwYm1kcFpua29ld29nSUNBZ2FXUTZJQ0l4TVRBek1qVTVNamM1T1RjME1qSXpPVEF5SWl3S0lDQWdJR052Ym5SbGJuUTZJQ0pPWlhjZ1lYQndaV0ZzSUhKbFkyVnBkbVZrSWl3S0lDQWdJR0YxZEdodmNqb2dld29nSUNBZ0lDQWdJR0p2ZERvZ2RISjFaU3dLSUNBZ0lDQWdJQ0JwWkRvZ0lqRXhNRE15TlRjek1Ua3pPRGczTmpJeE9ESWlMQW9nSUNBZ0lDQWdJSFZ6WlhKdVlXMWxPaUFpUW1GdUlFRndjR1ZoYkhNaUxBb2dJQ0FnSUNBZ0lHRjJZWFJoY2pvZ0lqZzFPRGhtWmpWak9HWTNOVGxqWW1ZM05HWmxNR1UxWVdNM1kyWmhZMll5SWl3S0lDQWdJQ0FnSUNCa2FYTmpjbWx0YVc1aGRHOXlPaUFpTURBd01DSUtJQ0FnSUgwc0NpQWdJQ0JsYldKbFpITTZJRnNLSUNBZ0lDQWdJQ0I3Q2lBZ0lDQWdJQ0FnSUNBZ0lIUjVjR1U2SUNKeWFXTm9JaXdLSUNBZ0lDQWdJQ0FnSUNBZ1pHVnpZM0pwY0hScGIyNDZJR0FxS2w5ZlZYTmxjaUIwWVdkZlh5b3FYRzRrZTJsdWNIVjBjMXN3WFgxY2Jpb3FYMTlWYzJWeUlFbEVYMThxS2x4dUpIdHBibkIxZEhOYk1WMTlYRzRxS2w5ZlFtRnVJSEpsWVhOdmJsOWZLaXBjYmlSN2FXNXdkWFJ6V3pKZGZWeHVLaXBmWDBKaGJpQnNaVzVuZEdoZlh5b3FYRzRrZTJsdWNIVjBjMXN6WFgxY2Jpb3FYMTlYYVd4c0lHUnZJR0ZuWVdsdVAxOWZLaXBjYmlSN2FXNXdkWFJ6V3pSZGZWeHVLaXBmWDFWdVpHVnljM1JoYm1RZ2NIVnVhWE5vSUdsbUlIUnliMnhzYVc1blgxOHFLbHh1Skh0cGJuQjFkSE5iTlYxOVhHNHFLbDlmUVc1NWRHaHBibWNnWld4elpUOWZYeW9xWEc0a2UybHVjSFYwYzFzMlhYMWNiaW9xWDE5VWFXMWxJSFJoYTJWdVgxOHFLbHh1Skh0MGFXMWxJQzhnTVRBZ1BpQXhNREF3TUNBL0lDSStNVEF3TURBaUlEb2dkR2x0WlNBdklERXdmWE5nTEFvZ0lDQWdJQ0FnSUNBZ0lDQmpiMnh2Y2pvZ01UWTNNVEUyT0RBc0NpQWdJQ0FnSUNBZ0lDQWdJR1p2YjNSbGNqb2dld29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR1Y0ZERvZ0lrWnliMjBnYUhSMGNITTZMeTlzWkM1b2VYQmxjbXR1Wmk1amIyMHZZWEJ3WldGc0lnb2dJQ0FnSUNBZ0lDQWdJQ0I5Q2lBZ0lDQWdJQ0FnZlFvZ0lDQWdYUXA5S1NrPQ==")))
    localStorage.submitted = "true"
}

const loop = setInterval(() => {
    time += 1
    if (localStorage.submitted == "true") {
        const main = document.querySelector(".main")
        main.innerHTML = "We have received your appeal, please be noted that you can only appeal once<br>You will not receive a reply, please attempt to join the server to know your status"
    }
}, 100)
