"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getCarValue_1 = __importDefault(require("./../Functions/API-1/getCarValue"));
const carValue = (req, res) => {
    let carName; // car name or model
    let year; // car year in number only
    let carValue; // car value
    ({ carName, year } = req.body); // Assigning the values from the body
    console.log(typeof year);
    if (typeof year === "string") {
        year = Number(year);
    }
    carValue = (0, getCarValue_1.default)(carName, year); // getting the car value from name and year
    res.json(carValue); // Sending the car value
};
exports.default = carValue;
