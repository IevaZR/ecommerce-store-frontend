import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'

export const verifySessionToken = (req, res, next) => {
    const token = req.headers.cookie.split("session_token=")[1]

    if (!token) {
        return res.status(401).send("Not authorized!")
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
        if (err) {
            return res.status(401).send("Token is invalid!")
        } else {
            return next()
        }
    })
}