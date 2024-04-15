const express = require("express");
const prodRouter = express.Router();
const Product = require('../../models/Product')

prodRouter.get('/', (req, res)=>{
    Product.find({})
    .then(products => res.json(products))
    .catch(err => console.log(err))
})

prodRouter.post('/', (req, res)=>{
    const {article, price, category, description} = req.body
    
    if(!article || !price || !category || !description) {
        return res.status(400).send({error: 'Dados insuficientes'});
    }
    
    const newProd = new Product({
        article,
        price,
        category,
        description,
        del: true        
    }) 
    
    newProd.save()
        .then((saveProd)=>res.json(saveProd))
})

module.exports = prodRouter