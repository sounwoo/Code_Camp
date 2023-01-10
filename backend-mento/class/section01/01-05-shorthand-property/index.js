function qqq(profile) {
    const { name, age, school } = profile;
    console.log(name, age, school);
}

const name = '철수';
const age = '12';
const school = '다람쥐 초등학교';

// const profile = {
//     name: name,
//     age: age,
//     school : school
// };

const profile = { name, age, school }; // key와 value가 같아서, value를 생략함 => Shorthand-property

qqq(profile); // 1. 변수에 담에서 보내주기
// qqq({ name, age, school }); // 2. 그냥 통째로 내보내기
// 1번, 2번 결과 동일
