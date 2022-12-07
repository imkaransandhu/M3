import getDriverRating from "../Functions/API-2/getDriverRating";

const riskRating = (
  req: { body: { claimHistory: string } },
  res: { json: (arg0: string | number) => void }
) => {
  let claimHistory: string; // car name or model
  let driverRating: number | string; // car value
  claimHistory = req.body.claimHistory; // Assigning the values from the body

  driverRating = getDriverRating(claimHistory); // getting the car value from name and year
  res.json(driverRating); // Sending the car value
};

export default riskRating;
