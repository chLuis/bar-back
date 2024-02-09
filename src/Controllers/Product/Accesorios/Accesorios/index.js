import Accesorios from '../../../../Models/Product/Accesorios/Accesorios/index.js'
import dotenv from 'dotenv'

dotenv.config()

export const postAccesorios = async (req, res) => {  //No se deberia usar mas que para de alta la clase de correa, vamos a manejar con patch para el stock!
    let accesorios = req.body;
    try {
        let newAccesorios = new Accesorios(accesorios);
        await newAccesorios.save();
        res.status(200).json({ message: "Accesorios creado correctamente" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getAccesorios = async (req, res) => { // trae todos los correaes
    try {
        const accesorios = await Accesorios.find();
        res.status(200).json(accesorios);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getOneAccesorios = async (req, res) => { // trae un correa por id (Los correas rojos de talle M, tiene xxx id)
    try {
        const accesorios = await Accesorios.findById(req.params.id);
        res.status(200).json(accesorios);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const patchAccesorios = async (req, res) => {
    //console.log(req.params.id)
    let newProduct = req.body;
    //console.log(newProduct)
    try {
        const {stock} = await Accesorios.findById(req.params.id);
        const addOrDeleteAccesorios = req.body.stock;
        const stockAccesorios = stock + addOrDeleteAccesorios;
        newProduct.stock = stockAccesorios;
        console.log(newProduct)
        const accesorios = await Accesorios.findByIdAndUpdate(
            req.params.id,
            { $set: newProduct },
            { new: true }
        );
        res.status(200).json(accesorios);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteAccesorios = async (req, res) => {
    try {
        const accesorios = await Accesorios.findByIdAndDelete(req.params.id);
        res.status(200).json(accesorios);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}