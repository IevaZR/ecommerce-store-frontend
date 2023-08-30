import express from "express";
import { createOrder, deleteOrder, getAllOrders, getOrder, updateOrder, getUserOrders } from "../controllers/orderController.js"

const router = express.Router()

router.post('/create-order', createOrder);
router.get('/get-all-orders', getAllOrders);
router.get('/get-order/:id', getOrder);
router.get('/get-user-orders/:userId', getUserOrders)
router.delete('/delete-order/:id', deleteOrder)
router.put('/update-order/:id', updateOrder)

export default router;