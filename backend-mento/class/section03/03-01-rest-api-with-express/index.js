// const express = require('express');  // 옛날방식 => commonjs
import express from 'express'; // 요즘방식 => module

const app = express();
const port = 3000;

app.get('/qqq', function (req, res) {
    // 미들웨어 함수 (경로를 알려준다.)
    res.send('Hello World');
});

app.listen(port, () => {
    console.log('🐶 백엔드 API 서버가 켜졌어요!!');
});
// 포트번호
