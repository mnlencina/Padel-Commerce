const express = require("express");
const router = express.Router();
const prodRouter = require('./product/prodRouter')

router.use('/product', prodRouter)



module.exports = router