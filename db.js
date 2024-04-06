const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

pool.connect((err) => {
  if (err) {
    console.log("error db: ", err.message);
  } else {
    console.log("Connect to PostgreSQL successfully!");
  }
});

module.exports = pool;