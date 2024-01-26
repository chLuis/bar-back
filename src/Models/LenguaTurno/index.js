import { Schema, model } from 'mongoose';

const LenguaTurnoSchema = new Schema({
    idDog: {type: String, required:[true, "id de perro es requerido"]},
    name: {type: String, required: [true, "Nombre es requerido"]},
    date: {type: String, required: [true, "Fecha es requerido"]},
    hour: {type: String, required: [true, "Horario es requerido"]},
    duration: {type: Number, required: [true, "Duración es requerido"]},
    typeService: {type: String, required: [true, "Tipo de servicio es requerido"]},
    phone: {type: Number},
    price: {type: Number},
    payment: {type: String}
})

export default model ("LenguaTurno", LenguaTurnoSchema)