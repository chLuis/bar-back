import Cosmetica from '../../../Models/Product/Cosmetica/index.js'
import dotenv from 'dotenv'

dotenv.config()

export const postCosmetica = async (req, res) => {  //No se deberia usar mas que para de alta la clase de correa, vamos a manejar con patch para el stock!
    let cosmetica = req.body;
    try {
        let newCosmetica = new Cosmetica(cosmetica);
        await newCosmetica.save();
        res.status(200).json({ message: "Cosmetica creado correctamente" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getCosmetica = async (req, res) => { // trae todos los correaes
    try {
        const cosmetica = await Cosmetica.find();
        res.status(200).json(cosmetica);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getOneCosmetica = async (req, res) => { // trae un correa por id (Los correas rojos de talle M, tiene xxx id)
    try {
        const cosmetica = await Cosmetica.findById(req.params.id);
        res.status(200).json(cosmetica);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const patchCosmetica = async (req, res) => {
    //console.log(req.params.id)
    let newProduct = req.body;
    //console.log(newProduct)
    try {
        const {stock} = await Cosmetica.findById(req.params.id);
        const addOrDeleteCosmetica = req.body.stock;
        const stockCosmetica = stock + addOrDeleteCosmetica;
        newProduct.stock = stockCosmetica;
        //console.log(newProduct)
        const cosmetica = await Cosmetica.findByIdAndUpdate(
            req.params.id,
            { $set: newProduct },
            { new: true }
        );
        res.status(200).json(cosmetica);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteCosmetica = async (req, res) => {
    try {
        const cosmetica = await Cosmetica.findByIdAndDelete(req.params.id);
        res.status(200).json(cosmetica);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}