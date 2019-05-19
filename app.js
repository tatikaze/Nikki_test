const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');  // expressモジュールのインポート
const app = express();  // エクスプレスのインスタンス生成

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// /にアクセスされたときの処理
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/diarys', (req, res) => {
    res.json(data);
});

app.post('/post', (req, res) => {
    console.log(req.body);
    data.diarys.push(req.body);
    res.json(data);
});

var data = {
  diarys: [
    {title: 'もうだめだ', content: 'おしまいだぁ'},
    {title: 'Vtuberすこっていけ', content: 'バ美肉おじさんは救いです'},
    {title: 'オーバーウォッチくそげー', content: '殺さないでください'},
  ]
}

// 3000番で待受
app.listen(3000, () => {
  console.log('Ready!');
});