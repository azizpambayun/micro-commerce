import express from "express";
import redis from "redis";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

// Redis client
const redisClient = redis.createClient({
  url: process.env.REDIS_URL,
});
redisClient.connect().then(() => console.log("Connected to Redis"));

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    service: "Product Service",
  });
});

// Start the server
app.listen(3002, () => {
  console.log("Product Service running on port 3002");
});
