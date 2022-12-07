const express = require("express");
const server = express();
server.use(express.json());
const env = require("dotenv");
env.config();

import carValue from "./Controllers/carValue";
import riskRating from "./Controllers/riskRating";

const PORT = process.env.PORT || "3002";

server.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});

server.get("/", (req: any, res: any) => {
  res.send("Welcome to the Turners");
});

server.post("/api1", carValue);

server.post("/api2", riskRating);
