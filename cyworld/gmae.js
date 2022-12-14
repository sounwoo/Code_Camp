// 끝말잇기
const followUp = () => {
    let myword = document.getElementById('myword').value;
    let word = document.getElementById('word').innerText;

    let firstword = myword[0];
    let lastword = word[word.length - 1];

    if (firstword === lastword) {
        document.getElementById('result').innerText = '정답 입니다.';
        document.getElementById('word').innerText = myword;
        document.getElementById('myword').value = '';
    } else {
        document.getElementById('result').innerText = '오답 입니다.';
        document.getElementById('myword').value = '';
    }
};

// LOTTO
const lotto = () => {
    let lotto = [];
    for (var i = 0; i < 6; i++) {
        let n = Math.floor(Math.random() * 45) + 1;
        if (!sameNum(n)) {
            lotto.push(n);
        } else {
            i--;
        }
    }
    function sameNum(n) {
        return lotto.find((e) => e === n);
    }
    lotto.sort((a, b) => a - b);

    document.getElementById('own').innerText = lotto[0];
    document.getElementById('two').innerText = lotto[1];
    document.getElementById('three').innerText = lotto[2];
    document.getElementById('four').innerText = lotto[3];
    document.getElementById('five').innerText = lotto[4];
    document.getElementById('six').innerText = lotto[5];
};
