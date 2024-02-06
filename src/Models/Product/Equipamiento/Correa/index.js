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

export default model ("Correa", CorreaSchema)


