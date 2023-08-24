import express from "express";
import { createEmail, deleteEmail, getAllEmails, getEmail, updateEmail } from "../controllers/emailController.js"

const router = express.Router()

router.post('/create-email', createEmail);
router.get('/get-all-emails', getAllEmails);
router.get('/get-email/:id', getEmail);
router.delete('/delete-email/:id', deleteEmail)
router.put('/update-email/:id', updateEmail)

export default router;