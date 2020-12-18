const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/moldeme-challenge'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname+'/dist/moldeme-challenge/index.html');
});

app.listen(process.env.PORT || 8080, () => {
  console.log('server running!');
});
