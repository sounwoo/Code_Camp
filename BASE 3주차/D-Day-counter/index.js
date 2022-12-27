const msgContainer = document.querySelector('#d-day-message');
const container = document.querySelector('#d-day-container');
const savedDate = localStorage.getItem('saved-date');
const intervalIdArr = [];

container.style.display = 'none';
msgContainer.innerHTML = '<h3>D-Day를 입력해주세요</h3>';

const dateFormMaker = () => {
    const inputYear = document.querySelector('#target-year-input').value;
    const inputMonth = document.querySelector('#target-month-input').value;
    const inputDate = document.querySelector('#target-date-input').value;
    const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
    // const dateFormat = inputYear + "-" + inputMonth + "-" + inputDate

    return dateFormat;
    // console.log(inputYear, inputMonth, inputDate);
};
const countMaker = (data) => {
    if (data !== savedDate) {
        localStorage.setItem('saved-date', data);
    }
    const nowDate = new Date();
    const targetDate = new Date(data).setHours(0, 0, 0, 0);
    const remaining = (targetDate - nowDate) / 1000;
    if (remaining <= 0) {
        container.style.display = 'none';
        msgContainer.innerHTML = '<h3>타이머가 종료되었습니다.</h3>';
        msgContainer.style.display = 'flex';
        setclearInterval();
        return;
    } else if (isNaN(remaining)) {
        container.style.display = 'none';
        msgContainer.innerHTML = '<h3>유요한 시간대가 아닙니다.</h3>';
        msgContainer.style.display = 'flex';
        setclearInterval();
        return;
    }

    const remainingObj = {
        remainingDate: Math.floor(remaining / 3600 / 24),
        remainingHours: Math.floor(remaining / 3600) % 24,
        remainingMin: Math.floor(remaining / 60) % 60,
        remainingSec: Math.floor(remaining) % 60,
    };

    const documentArr = ['days', 'hours', 'min', 'sec'];
    const timeKeys = Object.keys(remainingObj);

    const format = (time) => {
        if (time < 10) {
            return `0${time}`;
        } else {
            return time;
        }
    };

    let i = 0;
    for (let tag of documentArr) {
        const remainingTime = format(remainingObj[timeKeys[i]]);
        document.getElementById(tag).textContent = remainingTime;
        i++;
    }

    // const documentObj = {
    //     days: document.querySelector('#days'),
    //     hours: document.querySelector('#hours'),
    //     min: document.querySelector('#min'),
    //     sec: document.querySelector('#sec'),
    // };

    // let i = 0;
    // for (let key in documentObj) {
    //     documentObj[key].textContent = remainingObj[timeKeys[i]];
    //     i++;
    // }

    // const timeKeys = Object.keys(remainingObj);
    // const docKeys = Object.keys(documentObj);

    // for (let i = 0; i < timeKeys.length; i++) {
    //     documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]];
    // }

    // documentObj.days.textContent = remainingObj.remainingDate;
    // documentObj.hours.textContent = remainingObj.remainingHours;
    // documentObj.min.textContent = remainingObj.remainingMin;
    // documentObj.sec.textContent = remainingObj.remainingSec;
};

const starter = (targetDateInput) => {
    if (!targetDateInput) {
        targetDateInput = dateFormMaker();
    }
    container.style.display = 'flex';
    msgContainer.style.display = 'none';
    setclearInterval();
    countMaker(targetDateInput);
    const intervalId = setInterval(() => countMaker(targetDateInput), 1000);
    intervalIdArr.push(intervalId);

    // for (let i = 0; i < 60; i++) {
    //     setTimeout(countMaker, 1000 * i);
    // }
};

const setclearInterval = () => {
    localStorage.removeItem('saved-date');
    for (let i = 0; i < intervalIdArr.length; i++) {
        clearInterval(intervalIdArr[i]);
    }
};

const resetTimer = () => {
    container.style.display = 'none';
    msgContainer.innerHTML = '<h3>D-Day를 입력해주세요</h3>';
    msgContainer.style.display = 'flex';
    setclearInterval();
};

if (savedDate) {
    starter(savedDate);
} else {
    container.style.display = 'none';
    msgContainer.innerHTML = '<h3>D-Day를 입력해주세요</h3>';
}
