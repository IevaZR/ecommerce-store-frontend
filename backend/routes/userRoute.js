import express from "express";
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controllers/userController.js"

const router = express.Router()

router.post('/create-user', createUser);
router.get('/get-all-users', getAllUsers);
router.get('/get-user/:id', getUser);
router.delete('/delete-user/:id', deleteUser)
router.put('/update-user/:id', updateUser)

export default router;