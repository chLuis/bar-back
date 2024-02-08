import { Schema, model } from "mongoose";

const CorreaSchema = new Schema({
    large: {
        type: Number,
        required: [true, "Largo es requerido"]
    },
    print: {
        type: Boolean,
        default: false,
    },
    color: {
        type: String,
        required: [true, "Color es requerido"]
    },
    price: {
        type: Number
    },
    stock: {
        type: Number,
        required: [true, "Stock es requerido"]
    },
    description: {
        type: String,
    },
    image: {
        type: Array,
    },
    material:{
        type: String,
    },
    id_Product: {
        type: String,
        required: [true, "id Producto es requerido"]
    }
})

export default model ("Correa", CorreaSchema)


