/*
const http = require('http');
const fs = require('fs');
const app = http.createServer((request, response) => {
    let url = request.url;
    if (request.url == '/') {
        url = '/index.html';
    }
    if (request.url == '/favicon.ico') {
        return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
});

app.listen(3000);
 */

const express = require('express');
const app = express();
const _template = require('./lib/template.js');
// const fs = require('fs');

app.use(express.static('./index.html'));
//get은 라우팅. 입력된 값에 의해서 어디로 보내줄지 결정하는 역할.
app.get('/', (req, res) => res.send());


app.listen(3000, () => console.log('3000포트 시작'));