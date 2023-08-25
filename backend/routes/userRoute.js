import express from "express";
import { createUser, deleteUser, getAllUsers, getUser, updateUser, loginUser, checkAuth } from "../controllers/userController.js"

const router = express.Router()

router.post('/create-user', createUser);
router.get('/get-all-users', getAllUsers);
router.get('/get-user/:id', getUser);
router.delete('/delete-user/:id', deleteUser)
router.put('/update-user/:id', updateUser)

router.post('/login', loginUser)
router.post('/check-auth', checkAuth)

export default router;