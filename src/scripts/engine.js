const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input")
const keysCheck = document.querySelector(".keys-check input")

let mapedKeys = [];
var volume;

const playTune = (key) => {
    let audio = new Audio("src/tunes/a.mp3");
    audio.src = `src/tunes/${key.toUpperCase()}.mp3`;
    audio.volume = volume ? volume : 0.5;
    audio.play();

    const clickedKey = document.querySelector(`[data-key='${key.toLowerCase()}']`)
    clickedKey.classList.add("active".to);
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 700);
}

pianoKeys.forEach((keyEl) => {

    keyEl.addEventListener("pointerdown", (e) => {
        playTune(e.currentTarget.dataset.key)
    })
    keyEl.addEventListener("pointerup", (e) => {
        document.querySelector(`[data-key='${e.currentTarget.dataset.key.toLocaleLowerCase()}']`).classList.remove("active");
    })
    mapedKeys.push(keyEl.dataset.key);
})


document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key))
        playTune(e.key);
})

const handleVolume = (e) => {
    volume = e.target.value
};

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys)
