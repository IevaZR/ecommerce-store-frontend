import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controllers/productController.js"

const router = express.Router()

router.post('/create', createProduct);
router.get('/get-all', getAllProducts);
router.get('/get/:name', getProduct);
router.delete('/delete/:name', deleteProduct)
router.put('/update/:name', updateProduct)

export default router;