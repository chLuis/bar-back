import { Schema, model } from "mongoose";

const AccountingSchema = new Schema({
    name: {type: String, required: [true, 'Name is required']},
    amount: {type: Number, required: [true, 'Amount is required']},
    category: {type: String, required: [true, 'Category is required']},
    description: {type: String},
    date: {type: Date, default: Date.now},
})

export default model('Accounting', AccountingSchema);