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
            required: false,
        },
        height: {
            type: Number,
            required: false,
        },
        depth: {
            type: Number,
            required: false,
        }
    },
    features: [
        {
            featureTitle: {
                type: String,
                required: false,
            },
            featureParagraph: {
                type: String,
                required: false,
            },
        },
        {
            featureTitle: {
                type: String,
                required: false,
            },
            featureParagraph: {
                type: String,
                required: false,
            }, 
        },
        {
            featureTitle: {
                type: String,
                required: false,
            },
            featureParagraph: {
                type: String,
                required: false,
            },
        }
    ],
    keywords: [
        {
            type: String,
            required: false,
        },
        {
            type: String,
            required: false,
        },
        {
            type: String,
            required: false,
        },
        {
            type: String,
            required: false,
        },
        {
            type: String,
            required: false,
        }
    ],
    image: {
        type: String,
        required: true,
    },
});

export default mongoose.model("product", productSchema);