import { Schema, model } from 'mongoose';

const LenguaTurnoSchema = new Schema({
    idPerro: {type: String, required:[true, "id de perro es requerido"]},
    name: {type: String, required: [true, "Nombre es requerido"]},
    date: {type: String, required: [true, "Fecha es requerido"]},
    hour: {type: String, required: [true, "Horario es requerido"]},
    typeService: {type: String, required: [true, "Tipo de servicio es requerido"]},
    price: {type: Number},
    payment: {type: String}
})

export default model ("LenguaTurno", LenguaTurnoSchema)