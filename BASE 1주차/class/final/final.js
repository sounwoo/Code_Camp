const changeFocus1 = () => {
    let phone1 = document.getElementById('p1').value;
    if (phone1.length === 3) {
        document.getElementById('p2').focus();
    }
};

const changeFocus2 = () => {
    let phone2 = document.getElementById('p2').value;
    if (phone2.length === 4) {
        document.getElementById('p3').focus();
    }
};

const send = () => {
    let phone1 = document.getElementById('p1').value;
    let phone2 = document.getElementById('p2').value;
    let phone3 = document.getElementById('p3').value;

    if (phone1.length === 3 && phone2.length === 4 && phone3.length === 4) {
        document.getElementById('auth_send').disabled = false;
        document.getElementById('auth_send').style = 'color : #0068FF; cursor: pointer;';
    }
};

const timer = () => {
    document.getElementById('auth_send').disabled = true;
    document.getElementById('auth_send').style = 'color : none; background-color : none;';

    document.getElementById('timer_send').disabled = false;
    document.getElementById('timer_send').style =
        'color : #FFFFFF; background-color : #0068ff; cursor: pointer;';

    document.getElementById('timer_send').disabled = false;
    const number = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
    document.getElementById('auth_number').innerText = number;
    document.getElementById('auth_number').style.color = '#0068ff;';
    timer_finish();
};

let timers;
const timer_finish = () => {
    let time = 10;

    timers = setInterval(function () {
        if (time >= 0) {
            const min = Math.floor(time / 60);
            const sec = String(time % 60).padStart(2, '0');
            document.getElementById('timer_time').innerText = min + ':' + sec;
            time = time - 1;
        } else {
            document.getElementById('timer_time').innerText = '3:00';
            document.getElementById('timer_send').style = '';
            document.getElementById('timer_send').setAttribute('disabled', 'true');

            document.getElementById('auth_number').innerText = '000000';
            document.getElementById('auth_number').style = '';
            document.getElementById('auth_number').setAttribute('disabled', 'true');
            clearInterval(timers);
        }
    }, 1000);
};

const check = () => {
    clearInterval(timers);
    alert('인증이 완료되었습니다');

    document.getElementById('send_button').value = '인증완료';

    document.getElementById('timer_send').disabled = true;
    document.getElementById('send_button').disabled = false;
    document.getElementById('timer_send').innerText = '인증완료';
    document.getElementById('timer_send').style =
        'color : none; background-color : none;';

    document.getElementById('send_button').style =
        'cursor: pointer; background-color : #FFFFFF; color: #0068FF; border: 1px solid #0068FF; ';
    document.getElementById('auth_send').disabled = true;

    document.getElementById('timer_time').innerText = '3:00';
    document.getElementById('timer_send').style = '';
    document.getElementById('timer_send').setAttribute('disabled', 'true');

    document.getElementById('auth_number').innerText = '000000';
    document.getElementById('auth_number').style = '';
    document.getElementById('auth_number').setAttribute('disabled', 'true');
};

const checking = () => {
    let email = document.getElementById('email').value;
    let email_checking = email.includes('@');
    let name = document.getElementById('name').value;
    let pw1 = document.getElementById('pw1').value;
    let pw2 = document.getElementById('pw2').value;
    let region = document.getElementById('region').options.selectedIndex;
    let gender = document.querySelector('input[name="gender"]').checked;

    if (email === '') {
        document.getElementById('email_checking').innerText = '이메일을 입력해주세요.';
        document.getElementById('email_checking').style.color = 'red';
    } else {
        document.getElementById('email_checking').innerText = '';
    }
    if (email_checking === false) {
        document.getElementById('email_checking').innerText = '@가 포함되어야합니다.';
        document.getElementById('email_checking').style.color = 'red';
    } else {
        document.getElementById('email_checking').innerText = '';
    }

    if (name === '') {
        document.getElementById('name_checking').innerText = '이름을 입력해주세요.';
        document.getElementById('name_checking').style.color = 'red';
    } else {
        document.getElementById('name_checking').innerText = '';
    }
    console.log(pw1);
    if (pw1 === '') {
        document.getElementById('pw1_checking').innerText = '비밀번호를 입력해주세요.';
        document.getElementById('pw1_checking').style.color = 'red';
    } else {
        document.getElementById('pw1_checking').innerText = '';
    }
    if (pw2 === '') {
        document.getElementById('pw2_checking').innerText = '비밀번호를 입력해주세요.';
        document.getElementById('pw2_checking').style.color = 'red';
    } else {
        document.getElementById('name_checking').innerText = '';
    }
    if (pw1 !== pw2) {
        document.getElementById('pw1_checking').innerText =
            '비밀번호1과 비밀번호2가 동일해야 합니다.';
        document.getElementById('pw1_checking').style.color = 'red';
        document.getElementById('pw2_checking').innerText =
            '비밀번호1과 비밀번호2가 동일해야 합니다.';
        document.getElementById('pw2_checking').style.color = 'red';
    }
    if (region === 0) {
        document.getElementById('region_checking').innerText = '지역을 선택해주세요.';
        document.getElementById('region_checking').style.color = 'red';
    } else {
        document.getElementById('region_checking').innerText = '';
    }
    if (gender === false) {
        document.getElementById('gender_checking').innerText = '성별을 선택해주세요.';
        document.getElementById('gender_checking').style.color = 'red';
    } else {
        document.getElementById('gender_checking').innerText = '';
        alert('코드캠프 가입을 축하합니다');
    }
};
