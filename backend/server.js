const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/user", (req, res) => {
  res.json({
    name: "Chinmayee Tale",
    referralCode: "chinmayee2025",
    totalRaised: 1200,
  });
});

app.listen(5001, () => {
  console.log("Server running on port 5000");
});

app.get("/leaderboard", (req, res) => {
  res.json([
    { name: "Chinmayee", referralCode: "chinmayee2025", amount: 1200 },
    { name: "Raj", referralCode: "raj2025", amount: 950 },
    { name: "Aisha", referralCode: "aisha2025", amount: 800 },
    
  ]);
});

