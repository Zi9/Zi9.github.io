const sounds = [
    "and-im-wet-again.mp3",
    "chest-is-hairless.mp3",
    "do-not-clip-that.mp3",
    "dont-clip-that.mp3",
    "fucken-hell.mp3",
    "full-carbon.mp3",
    "get-outta-here.mp3",
    "guys.mp3",
    "help-me.mp3",
    "i-shaved-my-nipples.mp3",
    "its-flowing-long.mp3",
    "its-flowing-short.mp3",
    "its-me-mario.mp3",
    "jesus-christ.mp3",
    "like-ur-mom-last-night.mp3",
    "oh-shit.mp3",
    "ok-go-wank-off.mp3",
    "omg.mp3",
    "omg-wet.mp3",
    "on-the-nipples.mp3",
    "senpai.mp3",
    "so-hard.mp3",
    "tentacles.mp3",
    "thank-you.mp3",
    "that-is-nasty.mp3",
    "that-is-sick.mp3",
    "uwu.mp3",
    "wait-im-not-muted.mp3",
    "wdym-L.mp3",
    "wet-shirt.mp3",
    "what-the-shit.mp3",
    "when-they-see-balls.mp3",
    "yellow-box.mp3"
];

function playsound(sound)
{
    var mp3 = new Audio("sounds/" + sound);
    mp3.loop = false;
    mp3.play();
}

var main = document.getElementById("main");

sounds.forEach(sound => {
    var div = document.createElement("div");
    div.classList.add("board-button");
    div.addEventListener("click", () => {
        playsound(sound);
    });
    var p = document.createElement("p");
    var name = sound.split(".")[0].replace(/-/g, " ",);
    p.textContent = name[0].toUpperCase() + name.substring(1);
    div.appendChild(p);
    main.appendChild(div);
})