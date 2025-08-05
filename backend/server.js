const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

// Dummy data
const userData = {
  name: "Chinmayee Tale",
  referralCode: "chinmayee2025",
  totalRaised: 1250,
};

const leaderboardData = [
  { name: "Chinmayee", referralCode: "chinmayee2025", totalRaised: 1250 },
  { name: "Rohan", referralCode: "rohan2025", totalRaised: 1100 },
  { name: "Aditi", referralCode: "aditi2025", totalRaised: 950 },
  { name: "Aryan", referralCode: "aryan2025", totalRaised: 900 },
];

// REST API endpoints
app.get("/user", (req, res) => {
  res.json(userData);
});

app.get("/leaderboard", (req, res) => {
  res.json(leaderboardData);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
