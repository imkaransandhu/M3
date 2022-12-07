const letterToNumbers = require("./letterToNumber");

const getCarValue = (name: string, year: number): string | number => {
  // Checking if the year is negative
  if (year < 0) {
    return "Year can't be negative";
  }

  // Checking if the year is (nan)not a number
  if (typeof year != "number") {
    return "Year must be a number";
  }

  let carName: string; // variable to store name of car
  let carYear: number; // variable to store year of car
  let carNameLetterArray: string[]; // Array for name of car letters
  let carNameNumberArray: number[] = []; // car letters array into number array
  let carNameValue: number; // the value of car name only
  let carValue: number; // Final value of car

  // If name parameter is a number
  typeof name === "number" ? (carName = String(name)) : (carName = name);

  // Assigning year value
  carYear = year;

  // Checking if the year is (nan)not a number
  if (typeof carYear != "number") {
    return "Year must be a number";
  }

  carName = carName.replace(/\s+/g, ""); // removing white spaces
  carName = carName.toUpperCase(); // change all word to upper case
  carNameLetterArray = carName.split(""); // convert the word into array of letters

  // Converting letter to number according to their alphabetic position
  // a = 1 , b = 2 , c = 3 , d = 4 ...... z = 26 and number 0 = 0 , 1 = 0 ... 9 = 0
  carNameLetterArray.forEach((letter) =>
    carNameNumberArray.push(letterToNumbers(letter))
  );

  // Adding all the numbers in the array
  carNameValue = carNameNumberArray.reduce<number>(
    (accumulator: number, currentValue: number) => accumulator + currentValue,
    0
  );

  // Doing calculation for value
  carValue = carNameValue * 100 + carYear;
  return carValue;
};

export default getCarValue;
