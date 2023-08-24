import orderModel from "../models/orderModel.js";

export const createOrder = async (req, res) => {
    try {
        const order = new orderModel(req.body);
        const data = await order.save();
        res.status(201).json(data)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
};

export const getAllOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})

        res.status(201).send(orders);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

export const getOrder = async (req, res) => {
    try {
        const order = await orderModel.find({ id: req.params.id })

        res.status(201).send(order);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

export const deleteOrder = async (req, res) => {
    try {
        const order = await orderModel.deleteOne({ id: req.params.id })

        res.status(201).send(order);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export const updateOrder = async (req, res) => {
    try {
        const order = await orderModel.findOneAndUpdate({ id: req.params.id }, { $set: req.body, }, { new: true })

        res.status(201).send(order);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}