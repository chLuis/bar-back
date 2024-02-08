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
    price_small: {
        type: Number,
    },
    price_medium: {
        type: Number,
    },
    price_large: {
        type: Number,
    },
    price_xl: {
        type: Number,
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
