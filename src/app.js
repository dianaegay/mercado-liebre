const express = require('express');
const app = express();
const path= require ('path');


app.use(express.static(path.resolve(__dirname, '../public')));

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
});

app.listen (process.env.PORT || 3000, ( ) => console.log ('Servidor funcionando en host 3000'));