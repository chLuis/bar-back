import Accounting from "../../Models/Accounting/accounting.js";
import dotenv from "dotenv";

dotenv.config();


export const postAccounting = async (req, res) => {
    let accounting = req.body;
    //console.log(req.body)
    try {
        const newAccounting = await Accounting.create(accounting);
        res.status(201).json(newAccounting);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAccounting = async (req, res) => {
    try {
        const accounting = await Accounting.find();
        res.status(200).json(accounting);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const getOneAccounting = async (req, res) => {
    try {
        const accounting = await Accounting.findById(req.params.id);
        res.status(200).json(accounting);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const patchAccounting = async (req, res) => {
    let newAccounting = req.body;
    try {
        const accounting = await Accounting.findByIdAndUpdate(
            newAccounting,
            { $set: req.body },
            {
                new: true,
            });
        res.status(200).json(accounting);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const deleteAccounting = async (req, res) => {
    try {
        const accounting = await Accounting.findByIdAndDelete(req.params.id);
        res.status(200).json(accounting);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
