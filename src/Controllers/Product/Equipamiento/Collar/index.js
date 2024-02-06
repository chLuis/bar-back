import Collar from '../../../../Models/Product/Equipamiento/Collar/index.js'
import dotenv from 'dotenv'

dotenv.config()

export const postCollar = async (req, res) => {  //No se deberia usar mas que para de alta la clase de collar, vamos a manejar con patch para el stock!
    let collar = req.body;
    try {
        let newCollar = new Collar(collar);
        await newCollar.save();
        res.status(200).json({ message: "Collar creado correctamente" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getCollar = async (req, res) => { // trae todos los collares
    try {
        const collar = await Collar.find();
        res.status(200).json(collar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getOneCollar = async (req, res) => { // trae un collar por id (Los collares rojos de talle M, tiene xxx id)
    try {
        const collar = await Collar.findById(req.params.id);
        res.status(200).json(collar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const patchCollar = async (req, res) => {
    try {
        const oldStockCollar = await Collar.findById(req.params.id);
        const addOrDeleteCollar = req.body.stock;
        const stockCollar = oldStockCollar + addOrDeleteCollar;
        const collar = await Collar.findByIdAndUpdate(req.params.id, { stock: stockCollar });

        res.status(200).json(collar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteCollar = async (req, res) => {
    try {
        const collar = await Collar.findByIdAndDelete(req.params.id);
        res.status(200).json(collar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}