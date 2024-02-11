let isPaused = true;
const audio = new Audio('/src/assets/sound.mp3');

export function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    let intervalId = setInterval(function () {
        if (!isPaused) {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                clearInterval(intervalId);
                audio.play();
                setTimeout(() => {
                    audio.pause();
                }, 20000);
            }
        }
    }, 1000);
}

export function toggleTimer() {
    isPaused = !isPaused;
    audio.pause();
}