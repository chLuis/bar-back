import { Schema, model } from "mongoose";

const RopaSchema = new Schema({
    name: {
        type: String,
        required: [true, "Nombre es requerido"],
    },
    price: {
        type: Number,
        required: [true, "Precio es requerido"],
    },
    image: {
        type: Array,
        required: [true, "Imagen es requerida"],
    },
    description: {
        type: String,
        required: [true, "Descripción es requerida"],
    },
    stock: {
        type: Array,
    },
    id_Product: {
        type: String,
        required: [true, "id Producto es requerido"]
    }
})

export default model ("Ropa", RopaSchema)