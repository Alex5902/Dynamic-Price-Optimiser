import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function loginUser(userId) {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
}

export function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}