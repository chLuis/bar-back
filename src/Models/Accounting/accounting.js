import { Schema, model } from "mongoose";

const AccountingSchema = new Schema({
    name: {type: String, required: [true, 'Name is required']},
    amount: {type: Number, required: [true, 'Amount is required']},
    category: {type: String, required: [true, 'Category is required']},
    type: {type: String, required: [true, 'Type is required']},
    description: {type: String},
    section: {type: String},
    date: {
        type: {
            year: { type: Number, required: true },
            month: { type: Number, required: true },
            day: { type: Number, required: true }
        },
        required: [true, 'Date is required'],
        default: () => {
            const now = new Date();
            return {
                year: now.getUTCFullYear(),
                month: now.getUTCMonth() + 1,
                day: now.getUTCDate()
            };
        }
    }
})

export default model('Accounting', AccountingSchema);