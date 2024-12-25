const express = require("express");
const connectDB = require("./config/Db"); // Adjust the path based on your project structure

const app = express();

// Connect to MongoDB
connectDB();

// Middleware (if needed)
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
