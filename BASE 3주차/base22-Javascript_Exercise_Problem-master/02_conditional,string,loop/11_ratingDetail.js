/*

    문제

    점수를 입력받아 점수에 맞는 등급을 자세히 알려주는 함수를 완성하세요.
    점수가 0점 미만이거나 100점을 초과할 경우 '잘못된 입력입니다'를 리턴해야 합니다.

    > 등급 영역
        - 0점 미만 또는 100 점 초과 : '잘못된 입력입니다'
        - 90점 ~ 100점 : 'A'
        - 80점 ~ 89점 : 'B'
        - 70점 ~ 79점 : 'C'
        - 60점 ~ 69점 : 'D'
        - 0점 ~ 59점 : '등급 미달'

    > 세부 등급
        - 각 점수 등급 중 일의 자리 점수에 따라 세부 등급을 기존 등급 뒤에 붙여 표시해야 합니다. 
        - 7~9점대는 +
        - 0~3점대는 -
        - 4~6점대에는 기호를 추가하지 않습니다

        ex) 72점 => C-
            89점 => B+
           100점 => A+
*/

function ratingDetail(num) {
    // 여기에 코드를 작성하세요
    let sum = num % 10;

    if (sum >= 7) {
        if (num > 100 || num < 0) {
            return '잘못된 입력입니다';
        } else if (num >= 90) {
            return 'A+';
        } else if (num >= 80) {
            return 'B+';
        } else if (num >= 70) {
            return 'C+';
        } else if (num >= 60) {
            return 'D+';
        } else {
            return '등급 미달';
        }
    } else if (3 >= sum) {
        if (num > 100 || num < 0) {
            return '잘못된 입력입니다';
        } else if (num >= 90) {
            return 'A-';
        } else if (num >= 80) {
            return 'B-';
        } else if (num >= 70) {
            return 'C-';
        } else if (num >= 60) {
            return 'D-';
        } else {
            return '등급 미달';
        }
    } else {
        if (num > 100 || num < 0) {
            return '잘못된 입력입니다';
        } else if (num >= 90) {
            return 'A';
        } else if (num >= 80) {
            return 'B';
        } else if (num >= 70) {
            return 'C';
        } else if (num >= 60) {
            return 'D';
        } else {
            return '등급 미달';
        }
    }
}

module.exports = ratingDetail;
