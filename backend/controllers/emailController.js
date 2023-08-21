import emailModel from "../models/emailModel.js";

export const createEmail = async (req, res) => {
    try {
        const email = new emailModel(req.body);
        const data = await email.save();
        res.status(201).json(data)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
};

export const getAllEmails = async (req, res) => {
    try {
        const emails = await emailModel.find({})

        res.status(201).send(emails);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

export const getEmail = async (req, res) => {
    try {
        const email = await emailModel.find({ email: req.params.email })

        res.status(201).send(email);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

export const deleteEmail = async (req, res) => {
    try {
        const email = await emailModel.deleteOne({ email: req.params.email })

        res.status(201).send(email);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export const updateEmail = async (req, res) => {
    try {
        const email = await emailModel.findOneAndUpdate({ email: req.params.email }, { $set: req.body, }, { new: true })

        res.status(201).send(email);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}