import { loginUser, verifyToken } from "./auth";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

describe("Authentication Module", () => {
  it("should generate a valid JWT token with the correct userId", () => {
    const userId = "12345";
    const token = loginUser(userId);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    expect(decoded.userId).toBe(userId);
  });

  it("should correctly verify a JWT token", () => {
    const userId = "12345";
    const token = loginUser(userId);
    const verified = verifyToken(token);
    expect(verified.userId).toBe(userId);
  });
});
