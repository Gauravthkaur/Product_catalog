const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT 
app.use(cors());

const products = require('./data/product');
app.get('/api/products', (req, res) => {
  res.json(products);
});
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});