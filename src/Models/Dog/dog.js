import { Schema, model } from "mongoose";

const dogSchema = new Schema({
    name: {type: String, required: [true, 'Name is required']},
    race: {type: String, required: [true, 'Race is required']},
    age: {type: Number, required: [true, 'Age is required']},
    owner: {type: String, required: [true, 'Owner is required']},
    phone: {type: Number, required: [true, 'phone number is required']},
    email: {type: String},
    friends: {type: Object},
    enemies: {type: Object},
    rotation: {type: Number, required: [true, 'rotation is required']},
    disease: {type: String},
    allergy: {type: String},
    temper: {type: String},
    castrated: {type: Boolean},
    typeOfCut: {type: String},
    typeOfShampoo: {type: String},
    description: {type: String},
    image: {type: String}
})

export default model('Dog', dogSchema);