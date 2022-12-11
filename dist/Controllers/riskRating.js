"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getDriverRating_1 = __importDefault(require("../Functions/API-2/getDriverRating"));
const riskRating = (req, res) => {
    let claimHistory; // car name or model
    let driverRating; // car value
    claimHistory = req.body.claimHistory; // Assigning the values from the body
    driverRating = (0, getDriverRating_1.default)(claimHistory); // getting the car value from name and year
    res.json(driverRating); // Sending the car value
};
exports.default = riskRating;
