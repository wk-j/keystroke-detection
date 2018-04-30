(function () {
    let text = document.getElementById("text") as HTMLAreaElement
    let show = document.getElementById("show") as HTMLInputElement
    let map = {}

    text.onkeydown = text.onkeyup = function (e) {
        map[e.keyCode] = e.type
    }

    show.onclick = function (e) {
        let keys = Object.keys(map);
        let chars = keys.map(x => String.fromCharCode(parseInt(x)))

        console.log(keys)
        console.log(chars)

        map = {}
    }
})()