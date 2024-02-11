import Ropa from '../../../../Models/Product/Accesorios/Ropa/index.js'
import dotenv from 'dotenv'

dotenv.config()

export const postRopa = async (req, res) => {  //No se deberia usar mas que para de alta la clase de correa, vamos a manejar con patch para el stock!
    let ropa = req.body;
    try {
        let newRopa = new Ropa(ropa);
        await newRopa.save();
        res.status(200).json({ message: "Ropa creado correctamente" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getRopa = async (req, res) => { // trae todos los correaes
    try {
        const ropa = await Ropa.find();
        res.status(200).json(ropa);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getOneRopa = async (req, res) => { // trae un correa por id (Los correas rojos de talle M, tiene xxx id)
    try {
        const ropa = await Ropa.findById(req.params.id);
        res.status(200).json(ropa);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const patchRopa = async (req, res) => {
    console.log(req.params.id)
    let newProduct = await req.body;
    console.log(newProduct)
    try {
        const {stock} = await Ropa.findById(req.params.id); // [{talle: "s", stock: 2}, {talle: "m", stock: 1}]
        const addOrDeleteRopa = req.body.stock;
        console.log(addOrDeleteRopa)
        const updateStock = stock.map((item) => {
            const newStock = addOrDeleteRopa.find((stockForSize) => stockForSize.size === item.size);
            const updateStockForSize = newStock ? item.stock + newStock.stock : item.stock;
            return {size: item.size, stock: updateStockForSize}
        })
        //const stockRopa = stock + addOrDeleteRopa;
        newProduct.stock = updateStock;
        //console.log(newProduct)
        const ropa = await Ropa.findByIdAndUpdate(
            req.params.id,
            { $set: newProduct },
            { new: true }
         );
        res.status(200).json(ropa);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteRopa = async (req, res) => {
    try {
        const ropa = await Ropa.findByIdAndDelete(req.params.id);
        res.status(200).json(ropa);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}