// 데이터타입, 연산자 실습
1 + 1;
// 2;
1 + '만원';
// '1만원';
1 + '1';
// '11';
1 - '1';
// 0
'코드' + '캠프';
// '코드캠프'
'123' == 123;
// true;
'123' === 123;
// false;
true && true;
// true;
true && false;
// false;
true || true;
// true;
!true;
// false;
!false;
// true;

// 조건문 실습 1
if (1 + 1 === 2) {
    console.log('정답입니다.');
} else {
    console.log('틀렸습니다');
}
// 정답입니다.

if (true) {
    console.log('맞습니다');
} else {
    console.log('틀렸습니다');
}
// 맞습니다

if (!true) {
    console.log('맞습니다');
} else {
    console.log('틀렸습니다');
}
// 틀렸습니다

if (0) {
    console.log('맞습니다');
} else {
    console.log('틀렸습니다');
}
// 틀렸습니다

if (1) {
    console.log('맞습니다');
} else {
    console.log('틀렸습니다');
}
// 맞습니다

// 조건문 실습 2
const profile = {
    name: '철수',
    age: 12,
    school: '다람쥐 초등학교',
};

if (profile.age <= 20) {
    console.log('성인입니다.');
} else if (profile.age >= 8) {
    console.log('학생입니다.');
} else if (profile.age > 0) {
    console.log('어린이 입니다.');
} else {
    console.log('나이를 입력해 주세요.');
}
// 학생입니다.
