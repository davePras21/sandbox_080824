require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const morgan = require('morgan');
const controller = require("./controllers/controller")

const app = express();
const port = process.env.PORT || 80;

// Middleware
app.use(bodyParser.json());
app.use(cors());
// app.use(morgan('dev'));

// Define Routes
app.get('/', async (req, res) => {
  const datas = await controller()
  res.send(datas);
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
