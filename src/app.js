const express = require('express');

const app = express();

app.get('/user/:userId', (req, res) => {

const { userId } = req.params;

if (!userId || userId.trim() === '') {

return res.status(400).json({ error: 'userId is missing or invalid' });

}

res.status(200).json({ userId });

});

module.exports = app;
