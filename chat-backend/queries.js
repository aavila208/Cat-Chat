import pg from 'pg';
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

export const getMessages = async () => {
  const result = await pool.query('SELECT * FROM messages ORDER BY timestamp DESC LIMIT 50');
  return result.rows;
};

export const addUser = async (username, email, hashedPassword) => {
  const result = await pool.query(
    'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id',
    [username, email, hashedPassword]
  );
  return result.rows[0];
};

export const getUserByEmail = async (email) => {
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows[0];
};