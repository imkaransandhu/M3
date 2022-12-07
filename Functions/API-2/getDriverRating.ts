import { type } from "os";

const getDriverRating = (claimHistory: string): number | string => {
  let driverRating: number; // rating of driver (1 - 5)
  let occurrences: number; // number of occurrences of words
  let driverHistory: string; // history of driver
  let occurrencesArray: string[]; //Occurrences to check

  if (typeof claimHistory !== "string") {
    return "The input type is not supported, only string values are supported";
  }

  occurrences = 0; // Occurrences in the starting

  //all words occurrence that needs to be checked
  occurrencesArray = ["collide", "crash", "scratch", "bump", "smash"];
  driverHistory = claimHistory.toLowerCase();

  /* Checking the rating of the driver
   by looking special words like
  "collide", "crash", "scratch", "bump", and "smash" */
  occurrencesArray.forEach((occurrence) => {
    let wordOccurrences: number = 0;
    let customRegex = new RegExp(`${occurrence}`, `gim`); // regex => /crash/gim

    // generate an array with matched word -> ["crash", "Crash" , "Crashed"].length => 3
    wordOccurrences = (driverHistory.match(customRegex) || []).length;

    occurrences += wordOccurrences; // Adding up all occurrences
  });

  /* Generating the driver rating from the logic
   occurrences === 0 => driveRating = 1
   occurrences > 5 => driveRating = 5
   else( 1 = 1, 2 = 2, 3 = 3, 4 = 4, 5 = 5) driveRating = occurrences */
  occurrences === 0
    ? (driverRating = 1)
    : occurrences > 5
    ? (driverRating = 5)
    : (driverRating = occurrences);

  return driverRating;
};

export default getDriverRating;
