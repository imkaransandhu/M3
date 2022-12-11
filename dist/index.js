"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const server = express();
const cors = require("cors");
const env = require("dotenv");
server.use(express.json());
env.config();
server.use(cors());
const carValue_1 = __importDefault(require("./Controllers/carValue"));
//const carValue = require("carValue");
//const riskRating = require("riskRating");
const riskRating_1 = __importDefault(require("./Controllers/riskRating"));
const PORT = process.env.PORT || "3002";
server.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
});
// Simple API
server.get("/", (req, res) => {
    res.send("Welcome to the Turners Quotes");
});
// API - 1 car name and year to car value
server.post("/api1", carValue_1.default);
// API - 2 driver claimHistory to riskRating
server.post("/api2", riskRating_1.default);
