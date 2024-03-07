const express = require("express");
const app = express();
const port = 8001;
const pool = require("./db");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/check-connection", async (req, res) => {
  try {
    // Retrieve the inserted user data
    const result = await pool.query("SELECT NOW();");

    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

app.post("/", (req, res) => {
  const { email, password } = req.body;
  res.status(200).send({ email, password });
});

app.listen(port, () => {
  console.log(`app is running ${port}`);
});
