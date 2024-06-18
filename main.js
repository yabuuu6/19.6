onload = () =>{
        document.body.classList.remove("container");
};
document.addEventListener('DOMContentLoaded', function () {
        const audio = document.getElementById('background-music');

        // Mulai musik saat pengguna berinteraksi
        const startMusic = () => {
            audio.play().catch(err => console.log('Autoplay prevented:', err));
            document.body.removeEventListener('click', startMusic);
        };

        // Tambahkan event listener untuk klik pada seluruh body
        document.body.addEventListener('click', startMusic);

        // Kontrol Musik
        document.getElementById('play-button').addEventListener('click', () => audio.play());
        document.getElementById('pause-button').addEventListener('click', () => audio.pause());
        document.getElementById('mute-button').addEventListener('click', () => audio.muted = true);
        document.getElementById('unmute-button').addEventListener('click', () => audio.muted = false);
    });
    