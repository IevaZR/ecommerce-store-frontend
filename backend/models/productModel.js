import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: false,
    },
    description: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    dimensionsCm: {
        width: {
            type: Number,
            required: true,
        },
        height: {
            type: Number,
            required: true,
        },
        depth: {
            type: Number,
            required: true,
        }
    },
    features: [
        {
            featureTitle: {
                type: String,
                required: true,
            },
            featureParagraph: {
                type: String,
                required: true,
            },
        },
        {
            featureTitle: {
                type: String,
                required: true,
            },
            featureParagraph: {
                type: String,
                required: true,
            }, 
        },
        {
            featureTitle: {
                type: String,
                required: true,
            },
            featureParagraph: {
                type: String,
                required: true,
            },
        }
    ],
    keywords: [
        {
            type: String,
            required: true,
        },
        {
            type: String,
            required: true,
        },
        {
            type: String,
            required: true,
        },
        {
            type: String,
            required: true,
        },
        {
            type: String,
            required: true,
        }
    ],
    image: {
        type: String,
        required: true,
    },
});

export default mongoose.model("product", productSchema);