import request from 'supertest'
import app from '../app.js'

describe("Test EndPoints", () => {
  test("GET /products", async () => {
    const response = await request(app).get('/api/products?search=gy&limit=10&page=2');
    expect(response.statusCode).toBe(200);
    expect(response.body.count).toBe(9068);
    expect(response.body.rows[0].id).toBe(190);
    expect(response.body.rows[0].name).toBe('Ecology');
  });

  test("GET /products/:id", async () => {
    const response = await request(app).get('/api/products/12345');
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(12345);
    expect(response.body.name).toBe('Resource Program');
  });
})
