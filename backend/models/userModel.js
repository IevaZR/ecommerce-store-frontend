import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    phoneNumber: {
        type: Number,
        required: false
    },
    
    orders: [],
    favourites: [],
    admin: {
        type: Boolean,
        default: false
    },
    userName: {
        type: String,
        required: false
    }
})

export default mongoose.model("user", userSchema);