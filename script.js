onload = () =>{
    document.body.classList.remove("container");
};
window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');
    const playButton = parent.document.getElementById('play-button');
    const pauseButton = parent.document.getElementById('pause-button');
    const muteButton = parent.document.getElementById('mute-button');
    const unmuteButton = parent.document.getElementById('unmute-button');

    playButton.addEventListener('click', () => audio.play());
    pauseButton.addEventListener('click', () => audio.pause());
    muteButton.addEventListener('click', () => audio.muted = true);
    unmuteButton.addEventListener('click', () => audio.muted = false);
});