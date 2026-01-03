const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

// 📌 Orders API
app.post("/order", (req, res) => {
  const orders = JSON.parse(fs.readFileSync("order.json"));
  const newOrder = { id: Date.now(), ...req.body };
  orders.push(newOrder);
  fs.writeFileSync("order.json", JSON.stringify(orders, null, 2));
  res.json({ success: true, order: newOrder });
});

// 📌 Rewards API (dummy reward add)
app.post("/reward", (req, res) => {
  const rewards = JSON.parse(fs.readFileSync("rewards.json"));
  const newReward = { id: Date.now(), ...req.body };
  rewards.push(newReward);
  fs.writeFileSync("rewards.json", JSON.stringify(rewards, null, 2));
  res.json({ success: true, reward: newReward });
});

app.listen(5000, () => console.log("🔥 Server running on port 5000"));
