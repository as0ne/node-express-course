const express = require('express');
const app = express();

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

app.listen(8000, () => {
    console.log("Server is running...")
});