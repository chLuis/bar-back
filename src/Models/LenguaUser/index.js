import { Schema, model } from "mongoose";

const PeluUserSchema = new Schema({
    name: {type: String, required: [true, "Nombre es requerido"], unique: true},
    password: {type: String, required: [true, "Password es requerido"]},
    admin: {type: Boolean, default: false},
    state: {type: Boolean, default: false}
});

export default model("PeluUser", PeluUserSchema);
