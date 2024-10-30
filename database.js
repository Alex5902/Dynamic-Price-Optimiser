import pg from "pg";

const db = new pg.Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

db.connect().catch(error => console.error('Database connection error:', error));

export async function savePrice(productId, competitorName, price) {
  const query = 'INSERT INTO competitorPrices (productId, competitorName, price) VALUES ($1, $2, $3)';
  try {
    await db.query(query, [productId, competitorName, price]);
    console.log(`Saved price for ${competitorName}: $${price}`);
  } catch (error) {
    console.error('Error saving price:', error);
  }
}
