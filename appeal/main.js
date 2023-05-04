let time = 0

function Invalid() {
    document.querySelector(".main").innerHTML = "Invalid or empty arguments"
}

function Submit() {
    eval(atob(main))
    btoa("TmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXAKTmV2ZXIgZ29ubmEgbGV0IHlvdSBkb3duCk5ldmVyIGdvbm5hIHJ1biBhcm91bmQgYW5kIGRlc2VydCB5b3UKTmV2ZXIgZ29ubmEgbWFrZSB5b3UgY3J5Ck5ldmVyIGdvbm5hIHNheSBnb29kYnllCk5ldmVyIGdvbm5hIHRlbGwgYSBsaWUgYW5kIGh1cnQgeW91CllvdSBqdXN0IGdvdCByaWNrcm9sbGVk")
}

const loop = setInterval(() => {
    time += 1
    if (localStorage.submitted == "true") {
        const main = document.querySelector(".main")
        main.innerHTML = "We have received your appeal, please be noted that you can only appeal once<br>You will not receive a reply, please attempt to join the server to know your status"
    }
}, 100)
