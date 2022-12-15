const check = () => {
    const number = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
    document.getElementById('number').innerText = number;
    document.getElementById('number').style.color = '#' + number;

    let time = 180;

    setInterval(function () {
        if (time >= 0) {
            const min = Math.floor(time / 60);
            const sec = String(time % 60).padStart(2, '0');
            document.getElementById('timer').innerText = min + ':' + sec;
            time = time - 1;
        } else {
            document.getElementById('finish').disabled = true;
        }
    }, 1000);
};
