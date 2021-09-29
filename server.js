const express = require('express');
const app = express();

app.use(express.json());

const mockUsersData = [
    { name: 'Mark' },
    { name: 'Jill' }
];

// Processing HTTP requests

app.get('/users', (req, res) => {
    res.json({
        success: true,
        message: 'successfully got users. Nice !',
        users: mockUsersData,
    });
});

app.get('/users/:username', (req, res) => {
    res.json({
        success: true,
        message: 'Got one user.',
        user: req.params.username,
    });
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = "billyTheKid";
    const mockPassword = "abcdef";

    if (username === mockUsername && password === mockPassword) {
        res.json({
            success: true,
            message: 'password and username match',
            token: 'token',
        });
    } else {
        res.json({
            success: false,
            message: 'password and username do not match',
        });
    }
});

app.listen(8000, () => {
    console.log("Server is running...")
});