const {URL_DB} = process.env
const mongoose = require('mongoose')


mongoose.connect(URL_DB)
    .then(resp=> console.log("database Connect ✅"))
    .catch (err => console.log(err))

