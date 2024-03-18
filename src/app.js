const express = require('express');
const app = express();

app.get('/user/:userId', (req, res) => {
  //Write a code here for endpoint /user/:userId and also print parameter in json form
  const { userID } = req.params;
  if (!userId) {

return res.status(400).json({ error: 'userId is missing or invalid' });

}
  res.status(200).json({ userID })
});

module.exports = app;
