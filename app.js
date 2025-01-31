const express = require('express');
const {StatusCodes} = require('http-status-codes');
const cors =  require('cors');

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.get('/',  (req, res) => {
  const response = {
    email: 'adebayoabdqohar001@gmail.com',
    current_datetime: new Date().toISOString(),
    github_url: 'https://github.com/AbdulQohar1/HNG12-Zero.git'
  };

  res.status(StatusCodes.OK).json(response);
})

app.listen(port , () => {
  console.log(`Listening on port: ${port}`);
});