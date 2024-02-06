import { Schema, model } from "mongoose";

const CollarSchema = new Schema({
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
        type: Number,
        required: [true, "Precio es requerido"]
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
    }
})

export default model ("Collar", CollarSchema)


