"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const letterToNumbers = require("./letterToNumber");
const getCarValue = (name, year) => {
    let carName; // variable to store name of car
    let carYear; // variable to store year of car
    let carNameLetterArray; // Array for name of car letters
    let carNameNumberArray = []; // car letters array into number array
    let carNameValue; // the value of car name only
    let carValue; // Final value of car
    // Checking if the year is (nan)not a number
    if (typeof year != "number") {
        throw new Error("Year must be a number");
    }
    // Checking if the year is negative
    if (year < 1) {
        throw new Error("Year can't be negative or less than 1");
    }
    // If name parameter is a number
    typeof name === "number" && (name = String(name));
    //if car name data type is not a string.
    if (typeof name !== "string") {
        throw new Error("Invalid car name data type");
    }
    carName = name; // Assigning car name
    carYear = year; // Assigning year value
    carName = carName.replace(/\s+/g, ""); // removing white spaces
    if (carName === "") {
        throw new Error("Car Name can't be empty");
    }
    carName = carName.toUpperCase(); // change all word to upper case
    carNameLetterArray = carName.split(""); // convert the word into array of letters
    // Converting letter to number according to their alphabetic position
    // a = 1 , b = 2 , c = 3 , d = 4 ...... z = 26 and number 0 = 0 , 1 = 0 ... 9 = 0
    carNameLetterArray.forEach((letter) => carNameNumberArray.push(letterToNumbers(letter)));
    // Adding all the numbers in the array
    carNameValue = carNameNumberArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    // Doing calculation for value
    carValue = carNameValue * 100 + carYear;
    return carValue;
};
exports.default = getCarValue;
