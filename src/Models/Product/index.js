import { Schema, model } from 'mongoose';

const Product = new Schema({
    name: {
        type: String,
        required: true
    },
    id_Product: {
        type: Array
    },
    size: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: Array
    }
})

export default model ("Product", Product)
