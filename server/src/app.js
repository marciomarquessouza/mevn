const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/posts', (req, res) => {
  res.send([{
    title: 'Hello World',
    description: 'Everyone want buy a fast car',
  }]);
});

app.listen(process.env.PORT || 8081);
