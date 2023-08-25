import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    orders: [],
    favourites: [],
    admin: {
        type: Boolean,
        default: false
    }
})

export default mongoose.model("user", userSchema);