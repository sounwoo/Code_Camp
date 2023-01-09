function checkPhone(myphone) {
    if (myphone.length < 10 || myphone.length > 11) {
        console.log('에러 발생!! 핸드폰 번호를 올바르게 입력해 주세요!!!'); // early-exit
        return false;
    } else {
        return true;
    }
}

function getToken() {
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
    console.log(result);
    return result;
}

function sendTokenToSMS(myphone, result) {
    console.log(`${myphone}번호로 인증번호${result}를 전송합니다.`);
}

// 좋은 예
function createTokenOfPhone(myphone) {
    // myphone : 매개변수(parameter)
    // 1. 휴대폰번호 자릿수 확인(10~11자리)
    const isValid = checkPhone(myphone);
    if (isValid === false) return;

    // 2. 핸드폰 토큰 6자리 만들기
    const myToken = getToken();

    // 3. 핸드폰 번호에 토큰 전송하기
    sendTokenToSMS(myphone, myToken);
}

createTokenOfPhone('01012345678'); // 01012345678 : 인자(argument)
