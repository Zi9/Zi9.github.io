import OBSWebSocket from "https://esm.sh/obs-websocket-js";

let reader = null;
let video = document.getElementById("stream");

window.addEventListener("load", () => {
    reader = new MediaMTXWebRTCReader({
        url: "http://10.147.19.2:80/live/whep",
        user: "",
        pass: "",
        token: "",
        onError: (err) => {
            console.error(err);
        },
        onTrack: (evt) => {
            video.srcObject = evt.streams[0];
        },
        onDataChannel: (evt) => {
            evt.channel.binaryType = "arraybuffer";
            evt.channel.onmessage = (evt) => {
                console.log("data channel message", evt.data);
            };
        },
    });
});

window.addEventListener("beforeunload", () => {
    if (reader !== null) {
        reader.close();
    }
});

video.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    const rect = video.getBoundingClientRect();
    const videoAspect = 1920 / 1080;
    const containerAspect = rect.width / rect.height;

    let displayedWidth, displayedHeight;
    let offsetX, offsetY;

    if (containerAspect > videoAspect) {
        displayedHeight = rect.height;
        displayedWidth = displayedHeight * videoAspect;
        offsetX = (rect.width - displayedWidth) / 2;
        offsetY = 0;
    } else {
        displayedWidth = rect.width;
        displayedHeight = displayedWidth / videoAspect;
        offsetX = 0;
        offsetY = (rect.height - displayedHeight) / 2;
    }

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x < offsetX || x > offsetX + displayedWidth || y < offsetY || y > offsetY + displayedHeight) {
        return;
    }

    const videoX = (x - offsetX) * (1920 / displayedWidth);
    const videoY = (y - offsetY) * (1080 / displayedHeight);
    movemolang(videoX-26, videoY-32)
}, true);



const obs = new OBSWebSocket();
await obs.connect("ws://10.147.19.2:4455");
const sceneName = "Full Screen";
const res = await obs.call("GetSceneItemList", { sceneName });
const molang = res.sceneItems.find(
    i => i.sourceName === "Molang"
);
if (!molang) {
    console.error("Molang not found in scene");
}
const molangID = molang.sceneItemId;


async function movemolang(x, y) {
    await obs.call("SetSceneItemTransform", {
        sceneName,
        sceneItemId: molangID,
        sceneItemTransform: {
            positionX: x,
            positionY: y
        }
    });
}
