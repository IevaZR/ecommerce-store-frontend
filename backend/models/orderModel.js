import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    orderNumber: {
        type: Number,
        required: true
    },
    orderedProducts: [
        {
            product: {
                name: {
                    type: String,
                    required:true
                },
                quantity: {
                    type: Number,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                }
            }
        }
    ],
    customer: {
        type: Object,
        required:true
    },
    orderStatus: {
        type: String,
        status: ['Active', 'Fulfilled'],
        default: 'Active'
    },
});

export default mongoose.model("order", orderSchema);