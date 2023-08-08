import productModel from "../models/productModel.js";

export const createProduct = async (req, res) => {
    try {
        const product = new productModel({
            ...req.body
        });
    
        await product.save();

        res.status(201).send(`New product name: ${req.body.name} is created`);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find({})

        res.status(201).send(products);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

export const getProduct = async (req, res) => {
    try {
        const product = await productModel.find({ name: req.params.name})

        res.status(201).send(product);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const product = await productModel.deleteOne({ name: req.params.name})

        res.status(201).send(product);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export const updateProduct = async (req, res) => {
    try {
        const product = await productModel.findOneAndUpdate({ name: req.params.name} , {$set: req.body,}, {new: true})

        res.status(201).send(product);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}