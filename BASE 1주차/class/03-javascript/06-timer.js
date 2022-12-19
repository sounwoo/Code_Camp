let isStarted = false;

const check = () => {
    if (isStarted === false) {
        // 타이머가 작동중이지 않을떄
        isStarted = true;
        document.getElementById('finish').disabled = false;
        const number = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
        document.getElementById('number').innerText = number;
        document.getElementById('number').style.color = '#' + number;

        let time = 10;
        let timer;

        timer = setInterval(function () {
            if (time >= 0) {
                const min = Math.floor(time / 60);
                const sec = String(time % 60).padStart(2, '0');
                document.getElementById('timer').innerText = min + ':' + sec;
                time = time - 1;
            } else {
                document.getElementById('finish').disabled = true;
                isStarted = false;
                clearInterval(timer);
            }
        }, 1000);
    } else {
        // 타이머가 작동중일때
    }
};
