import { Schema, model } from "mongoose";

const drinkSchema = new Schema({
    name: {type: String, required: [true, 'Name is required']},
    description: {type: String, required: [true, 'Description is required']},
    price: {type: Number, required: [true, 'Price is required']},
    image: {type: String, required: [true, 'Image is required']},
    category: {type: String, required: [true, 'Category is required']},
    stock: {type: Number}
})

export default model('Drink', drinkSchema);