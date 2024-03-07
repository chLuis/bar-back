import Correa from '../../../../Models/Product/Equipamiento/Correa/index.js'
import dotenv from 'dotenv'

dotenv.config()

export const postCorrea = async (req, res) => {  //No se deberia usar mas que para de alta la clase de correa, vamos a manejar con patch para el stock!
    let correa = req.body;
    try {
        let newCorrea = new Correa(correa);
        await newCorrea.save();
        res.status(200).json({ message: "Correa creado correctamente" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getCorrea = async (req, res) => { // trae todos los correaes
    try {
        const correa = await Correa.find();
        res.status(200).json(correa);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getOneCorrea = async (req, res) => { // trae un correa por id (Los correas rojos de talle M, tiene xxx id)
    try {
        const correa = await Correa.findById(req.params.id);
        res.status(200).json(correa);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const patchCorrea = async (req, res) => {
    //console.log(req.params.id)
    let newProduct = req.body;
    //console.log(newProduct)
    try {
        const {stock} = await Correa.findById(req.params.id);
        const addOrDeleteCorrea = req.body.stock;
        const stockCorrea = stock + addOrDeleteCorrea;
        newProduct.stock = stockCorrea;
        //console.log(newProduct)
        const correa = await Correa.findByIdAndUpdate(
            req.params.id,
            { $set: newProduct },
            { new: true }
        );
        res.status(200).json(correa);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteCorrea = async (req, res) => {
    try {
        const correa = await Correa.findByIdAndDelete(req.params.id);
        res.status(200).json(correa);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}