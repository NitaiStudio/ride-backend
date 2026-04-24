import express from "express";

const app = express();
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

// Example API
app.get("/api/rides", (req, res) => {
  res.json({
    success: true,
    message: "Ride API working",
    rides: []
  });
});

// Create ride
app.post("/api/rides", (req, res) => {
  const { pickup, drop } = req.body;

  res.json({
    success: true,
    message: "Ride created",
    data: { pickup, drop }
  });
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
