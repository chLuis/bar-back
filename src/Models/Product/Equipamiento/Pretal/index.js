import { Schema, model } from "mongoose";

const PretalSchema = new Schema({
    size: {
        type: String,
        required: [true, "Tamaño es requerido"]
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

export default model ("Pretal", PretalSchema)

