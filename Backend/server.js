import express from "express";
import authRoutes from "./src/routes/authRoutes.js";
import pool from "./src/config/db.js";
import userRoutes from "./src/routes/userRoutes.js";

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.get("/test-db", async (req, res) => {
  const r = await pool.query("SELECT NOW()");
  res.json(r.rows[0]);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
