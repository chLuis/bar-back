import { Schema, model } from 'mongoose';

const Product = new Schema({
    name: {
        type: String,
        required: [true, "Nombre es requerido"]
    },
    id_Product: {
        type: Array
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
        required: [true, "Descripción es requerida"]
    },
    image: {
        type: Array
    },
    type: {
        type: String,
        required: [true, "Tipo de producto es requerido"]
    },
    price: {
        type: Number
    },
    stock: {
        type: Number
    }
})

export default model ("Product", Product)
