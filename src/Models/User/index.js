import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: {type: String, required: [true, "Nombre es requerido"], unique: true},
    password: {type: String, required: [true, "Password es requerido"]},
    admin: {type: Boolean, default: false},
    estado: {type: Boolean, default: true}
});

export default model("User", UserSchema);
