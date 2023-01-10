function checkEmail(email) {
    if (!email.includes('@') || email === undefined) {
        console.log('에러 발생!! 핸드폰 번호를 올바르게 입력해 주세요!!!');
        return false;
    } else {
        return true;
    }
}
function getWelcomeTemplate({ name, age, school, createdAt }) {
    const myTemplate = `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!!</h1>
                <hr />
                <div>이름 : ${name}</div>
                <div>나이 : ${age}</div>
                <div>학교 : ${school}</div>
                <div>가입일 : ${createdAt}</div>
            </body>
        </html>
    `;
    return myTemplate;
}
function sendTemplateToEmail({ myTemplate, email }) {
    console.log(`${email}이메일로 가입환영텝플릿${myTemplate}를 전송합니다.`);
}

function createUser({ name, age, school, email, createdAt }) {
    // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@" 포함여부)
    const isValid = checkEmail(email);
    if (isValid === false) return;

    // 2. 가입환영 템플릿 만들기
    const myTemplate = getWelcomeTemplate({ name, age, school, createdAt });

    // 3. 이메일에 가입환영 템플릿 전송하기
    sendTemplateToEmail({ myTemplate, email });
}

const name = '철수';
const age = 8;
const school = '도토리초등학교';
const email = 'a@a.com';
const createdAt = '2023-01-10';

createUser({ name, age, school, email, createdAt });
