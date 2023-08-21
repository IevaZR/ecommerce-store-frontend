import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct, getProductByIndex } from "../controllers/productController.js"

const router = express.Router()

router.post('/create', createProduct);
router.get('/get-all', getAllProducts);
router.get('/get/:id', getProduct);
router.get('/get-index/:index', getProductByIndex);
router.delete('/delete/:id', deleteProduct)
router.put('/update/:id', updateProduct)

export default router;