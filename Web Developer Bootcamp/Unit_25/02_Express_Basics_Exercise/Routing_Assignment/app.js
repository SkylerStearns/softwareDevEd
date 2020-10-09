// =============================================
// Setup
// =============================================
const express = require('express');
const app = express();

// =============================================
// Routes
// =============================================
app.get('/', function(req, res) {
  res.send('Hi there, welcome to my assignment!');
});

app.get('/speak/:animal', function(req, res) {
  const soundList = {
    pig: 'oink',
    cow: 'mooo',
    dog: 'woof',
    cat: 'I hate you human',
  };
  const sound = soundList[req.params.animal.toLowerCase()];
  res.send(`The ${req.params.animal} says '${sound || 'nothing...'}'!`);
});

app.get('/repeat/:str/:num', function(req, res) {
  function repeat(str, num) {
    let result = '';
    for (let i = 0; i < num; i++) {
      result += `${str} `;
    }
    return result;
  }

  res.send(repeat(req.params.str, req.params.num));
});

app.get('*', function(req, res) {
  console.log('User messed up somewhere...');
  res.send('Sorry, page not found... What are you doing with your life?');
});

// =============================================
// Server
// =============================================
app.listen(3000, function() {
  console.log('Server Up');
});
