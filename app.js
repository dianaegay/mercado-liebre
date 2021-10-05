const express = require('express');
const app = express();

app.listen (3000 || process.env.PORT, function () {
    console.log('Servidor funcionando en host 3000');
});

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req,res) => {
    res.sendFile(__dirname + '/views/register.html');
});
app.post('/register', (req,res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res) => {
    res.sendFile(__dirname + '/views/login.html');
});
app.post('/login', (req,res) => {
    res.sendFile(__dirname + '/views/home.html');
})

