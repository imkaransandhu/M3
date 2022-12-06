import getCarValue from "../Functions/API-1/getCarValue";

const testCases: {
  scenario: string;
  input: any[];
  expected: number | string;
}[] = [
  {
    scenario: "positive scenario 1",
    input: ["Civic", 2020],
    expected: 6620,
  },
  {
    scenario: "positive scenario 2",
    input: ["Nissan     Skyline", 2007],
    expected: 19107,
  },
  {
    scenario: "Negative Year scenario",
    input: ["Honda", -2005],
    expected: "Year can't be negative",
  },
  {
    scenario: "positive scenario 3 with number as a car name",
    input: ["222", 2005],
    expected: 2005,
  },
  {
    scenario: "year as string",
    input: ["Honda", "2005"],
    expected: "Year must be a number",
  },
  {
    scenario: "name as number",
    input: [222, 2005],
    expected: 2005,
  },
];

// let scenario: {
//   name: string;
//   input: any[];
//   expected: string | number;
// };

// scenario = {
//   name: "one",
//   input: ["Honda", "2005"],
//   expected: "Year must be a number",
// };

describe("sum tests", () => {
  testCases.map((ts) => {
    it(ts.scenario, () => {
      // Act
      const actual: number = getCarValue(ts.input[0], ts.input[1]);
      // Assert
      expect(actual).toBe(ts.expected);
    });
  });

  // it(scenario.name, () => {
  //   // Act
  //   const actual: number = getCarValue(scenario.input[0], scenario.input[1]);
  //   // Assert
  //   expect(actual).toBe(scenario.expected);
  // });
});
