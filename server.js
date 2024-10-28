import express from "express";
import { loginUser } from "./auth/auth.js";

const app = express();

app.use(express.json());

app.post('/login', (req, res) => {
  const { userId } = req.body;
  const token = loginUser(userId);
  res.json({ token });
});

export default app;

