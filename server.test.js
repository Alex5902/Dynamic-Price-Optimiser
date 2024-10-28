import request from "supertest";
import app from "./server.js";

describe('POST /login', () => {
  it('should respond with a JWT token', async () => {
    const userId = '12345';
    const response = await request(app)
      .post('/login')
      .send({ userId });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });
});
