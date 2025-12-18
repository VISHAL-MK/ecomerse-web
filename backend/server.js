require("dotenv").config();
const express = require("express");

const app = express();   // ✅ THIS LINE IS REQUIRED

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is running successfully");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
