import { Schema, model } from "mongoose";

const clientSchema = new Schema({
    name: {type: String, required: [true, 'Name is required']},
    email: {type: String, required: [true, 'Email is required']},
    password: {type: String, required: [true, 'Password is required']},
    role: {type: String, required: [true, 'Role is required']},
    active: {type: Boolean, default: true}
})

export default model('Client', clientSchema);