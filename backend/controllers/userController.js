import userModel from "../models/userModel.js";

export const createUser = async (req, res) => {
    try {
        const user = new userModel(req.body);
        const data = await user.save();
        res.status(201).json(data)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({})

        res.status(201).send(users);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await userModel.find({ id: req.params.id })

        res.status(201).send(user);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

export const deleteUser = async (req, res) => {
    try {
        const user = await userModel.deleteOne({ id: req.params.id })

        res.status(201).send(user);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export const updateUser = async (req, res) => {
    try {
        const user = await userModel.findOneAndUpdate({ id: req.params.id }, { $set: req.body, }, { new: true })

        res.status(201).send(user);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}