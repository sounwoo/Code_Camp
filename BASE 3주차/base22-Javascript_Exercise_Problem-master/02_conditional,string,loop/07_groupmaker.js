/* 

    문제
    
    임의의 수를 입력받아, 3과 5로 각각 나눈 다음, '나머지 값'에 따라 알맞은 메세지를 리턴하세요.

    - 3으로 나누어 떨어지는 경우 'A그룹'을 리턴
    - 5로 나누어 떨어지는 경우 'B그룹'을 리턴
    - 3과 5로 모두 나누어 떨어지는 경우, 'AB그룹'을 리턴
    - 3과 5로 나누어 떨어지지 않는 경우, 'C그룹'을 리턴

*/

function groupMaker(num) {
    // 여기에 코드를 작성하세요
    let one = num % 3;
    let two = num % 5;

    if (one === 0 && two === 0) {
        return 'AB그룹';
    } else if (one !== 0 && two !== 0) {
        return 'C그룹';
    } else if (one === 0) {
        return 'A그룹';
    } else if (two === 0) {
        return 'B그룹';
    }
}

module.exports = groupMaker;
