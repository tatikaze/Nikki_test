const path = require('path');
const express = require('express');  // expressモジュールのインポート
const app = express();  // エクスプレスのインスタンス生成

app.use(express.static(path.join(__dirname, 'public')));

// /にアクセスされたときの処理
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

// 3000番で待受
app.listen(3000, () => {
  console.log('Ready!');
});