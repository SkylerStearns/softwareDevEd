// =====================================
// SETUP
// =====================================
const express = require('express');
const app = express();

// =====================================
// ROUTES
// =====================================
app.get('/', function(req, res) {
  res.send('Welcome Home');
});

app.get('/bye', function(req, res) {
  res.send('Bye');
});

app.get('/dog', function(req, res) {
  res.send('Meow');
});

app.get('/r/:subredditName', function(req, res) {
  res.send(`Welcome To The Subreddit Page for ${req.params.subredditName}!`);
});

app.get('/r/:subredditName/comments/:id/:title', function(req, res) {
  res.send(
    `Welcome To The Comments Page for ${req.params.subredditName}.
    User with ID: ${req.params.id} said something about ${req.params.title}.`
  );
});

app.get('*', function(req, res) {
  res.send('You are a star. But that page does not exist. Sorry.');
});

// =====================================
// SERVER
// =====================================
app.listen(3000, function() {
  console.log('Server Up');
});
