const express = require('express');
const path = require('path')
const app = express();


app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, './index.html'))
});

app.get('/style.css', (req, res)=> {
    res.sendFile(path.resolve(__dirname, './style.css'))
})

app.get('/about', (req, res) => {
  res.status(200).send('About Page');
});

app.all('*', (req, res) => {
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
