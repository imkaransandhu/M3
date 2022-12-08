const express = require("express");
const server = express();
const cors = require("cors");
const env = require("dotenv");

server.use(express.json());
env.config();
server.use(cors());

import carValue from "./Controllers/carValue";
import riskRating from "./Controllers/riskRating";

const PORT = process.env.PORT || "3002";

server.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});

// Simple API
server.get("/", (req: undefined, res: { send: (arg0: string) => void }) => {
  res.send("Welcome to the Turners");
});

// API - 1 car name and year to car value
server.post("/api1", carValue);

// API - 2 driver claimHistory to riskRating
server.post("/api2", riskRating);
