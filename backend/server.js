import mongoose from "mongoose";
import express from "express";
import productRoute from "./routes/productRoute.js";
import emailRoute from "./routes/emailRoute.js"
import dotenv from "dotenv";
import cors from 'cors'

const app = express();
const port = 3009;

app.use(express.json())
app.use(cors())

dotenv.config()

const connectiontoDB = async() => {
    try {
        await mongoose.connect(
            process.env.MONGODB_URL + "EcommerceShop"
            );
        console.log('Connection to DB is successful');
    } catch (error) {
        console.log(error);
    }
};

//const Student = mongoose.model('Student', studentSchema);

app.use('/', productRoute)
app.use('/email', emailRoute)

app.listen(port, () => {
    connectiontoDB()
    console.log(`Server started on port: ${port}`);
});