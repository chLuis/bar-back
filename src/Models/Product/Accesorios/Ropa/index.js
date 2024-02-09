import { Schema, model } from "mongoose";

const RopaSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    imagen: {
        type: Array,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
    },
    id_Product: {
        type: String,
        required: [true, "id Producto es requerido"]
    }
})

export default model ("Ropa", RopaSchema)