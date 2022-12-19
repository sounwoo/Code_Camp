const check = () => {
    const number = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
    document.getElementById('number').innerText = number;
    document.getElementById('number').style.color = '#' + number;
};
