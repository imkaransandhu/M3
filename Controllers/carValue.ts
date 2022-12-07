import getCarValue from "./../Functions/API-1/getCarValue";

const carValue = (
  req: { body: { carName: string; year: number } },
  res: { json: (arg0: string | number) => void }
) => {
  let carName: string; // car name or model
  let year: number; // car year in number only
  let carValue: number | string; // car value
  ({ carName, year } = req.body); // Assigning the values from the body

  carValue = getCarValue(carName, year); // getting the car value from name and year
  res.json(carValue); // Sending the car value
};

export default carValue;
