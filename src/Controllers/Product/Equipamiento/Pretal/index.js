import Pretal from '../../../../Models/Product/Equipamiento/Pretal/index.js'
import dotenv from 'dotenv'

dotenv.config()

export const postPretal = async (req, res) => {  //No se deberia usar mas que para de alta la clase de correa, vamos a manejar con patch para el stock!
    let pretal = req.body;
    try {
        let newPretal = new Pretal(pretal);
        await newPretal.save();
        res.status(200).json({ message: "Pretal creado correctamente" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getPretal = async (req, res) => { // trae todos los correaes
    try {
        const pretal = await Pretal.find();
        res.status(200).json(pretal);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getOnePretal = async (req, res) => { // trae un correa por id (Los correas rojos de talle M, tiene xxx id)
    try {
        const pretal = await Pretal.findById(req.params.id);
        res.status(200).json(pretal);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const patchPretal = async (req, res) => {
    console.log(req.params.id)
    let newProduct = req.body;
    console.log(newProduct)
    try {
        const {stock} = await Pretal.findById(req.params.id);
        const addOrDeletePretal = req.body.stock;
        const stockPretal = stock + addOrDeletePretal;
        newProduct.stock = stockPretal;
        console.log(newProduct)
        const pretal = await Pretal.findByIdAndUpdate(
            req.params.id,
            { $set: newProduct },
            { new: true }
        );
        res.status(200).json(pretal);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deletePretal = async (req, res) => {
    try {
        const pretal = await Pretal.findByIdAndDelete(req.params.id);
        res.status(200).json(pretal);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}