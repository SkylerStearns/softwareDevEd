// =============================================
// Setup
// =============================================
const express = require('express');
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

// =============================================
// Routes
// =============================================
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/fruit/:item', (req, res) => {
  const fruit = req.params.item;
  res.render('fruit', { fruitVar: fruit });
});

app.get('/posts', (req, res) => {
  const posts = [
    {title: 'First Post', author: 'Skyler'},
    {title: 'Second Post', author: 'Nick'},
    {title: 'Third Post', author: 'Cody'},
  ]
  res.render('posts', { posts: posts });
});

app.get('*', (req, res) => {
  res.render('home');
});

// =============================================
// Server
// =============================================
app.listen(3000, () => {
  console.log('Server Running');
});
