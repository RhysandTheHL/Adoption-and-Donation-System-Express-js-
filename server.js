const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/landing page/index.html');
});
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login/user-login.html');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin') {
        res.redirect('/');
    } else {
        res.redirect('/login');
    }
});

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});