import { Schema, model } from 'mongoose';

const PeluTurnoSchema = new Schema({
    idPerro: {type: String, required:[true, "id de perro es requerido"]},
    fecha: {type: Date, required: [true, "Fecha es requerido"]},
    horario: {type: String, required: [true, "Horario es requerido"]}
})

export default model ("PeluTurno", PeluTurnoSchema)