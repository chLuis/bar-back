import Product from "../../Models/Product/index.js";
import dotenv from "dotenv";

dotenv.config();

export const postProduct = async (req, res) => {
    const product = req.body;
    try {
        const newProduct = new Product(product);
        await newProduct.save();
        res.status(201).json({
            message: "Producto creado correctamente",
            newProduct,
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getOneProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const patchProduct = async (req, res) => {
    let newProduct = req.body;
    try {
        const {stock} = await Product.findById(req.params.id);
        const addOrDeleteProduct = req.body.stock;
        const stockProduct = stock + addOrDeleteProduct;
        newProduct.stock = stockProduct;
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { $set: newProduct },
            { new: true }
        );
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}