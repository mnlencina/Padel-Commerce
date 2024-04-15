require('dotenv').config()
require('./db');

const express = require('express');
const app = express()
const cors = require('cors')
const PORT = 3001
const Product = require('./models/Product')
const router = require('./routes/index')

app.use(cors())
app.use(express.json())

app.use('/', router)

app.listen(PORT, () => {
    console.log(`server on PORT ${PORT}`);
  })

