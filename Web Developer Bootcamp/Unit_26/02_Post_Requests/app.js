// =============================================
// SETUP
// =============================================
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// =============================================
// ROUTES
// =============================================
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/friends', (req, res) => {
  const friends = ['Nick', 'Cody', 'Dylan', 'Dan', 'Will'];
  res.render('friends', {friends: friends});
});

app.post('/addfriend', (req, res) => {
  res.send('Hello Moto!');
})

// =============================================
// SERVER
// =============================================
app.listen(3000, () => {
  console.log('Server Up');
});
