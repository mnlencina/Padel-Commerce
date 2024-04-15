const {Schema, model} = require('mongoose')

const ProductSchema = new Schema({
    article: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    del: {
        type: Boolean,
        default: false,
    }
})

ProductSchema.set('toJSON',{
    transform: (document, retunedObject) => {
        retunedObject.id = retunedObject._id
        delete retunedObject._id
        delete retunedObject.__v
    }
})

const Product = model('Product', ProductSchema)

module.exports = Product