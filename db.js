const { Pool } = require("pg");

const pool = new Pool({
  host: "db",
  port: 5432,
  database: "testing",
  user: "root",
  password: "fahem123",
});

module.exports = pool;
