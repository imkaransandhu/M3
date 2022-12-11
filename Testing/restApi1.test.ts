import getCarValue from "../Functions/API-1/getCarValue";

// Positive test cases
const testCases: {
  scenario: string;
  input: any[];
  expected: {};
}[] = [
  {
    scenario: "scenario-1",
    input: ["Civic", 2020],
    expected: 6620,
  },
  {
    scenario: "scenario-2",
    input: ["Nissan     Skyline", 2007],
    expected: 19107,
  },

  {
    scenario: "scenario-3",
    input: ["222", 2005],
    expected: 2005,
  },

  {
    scenario: "scenario-4 (car name as number data type)",
    input: [222, 2005],
    expected: 2005,
  },
];

// Negative test cases
const errorTestCases: {
  scenario: string;
  input: any[];
  expected: string;
}[] = [
  {
    scenario: "scenario - negative year",
    input: ["Honda", -2005],
    expected: "Year can't be negative or less than 1",
  },
  {
    scenario: "scenario - year as a string data type",
    input: ["Honda", "2005"],
    expected: "Year must be a number",
  },
  {
    scenario: "scenario - year as a boolean data type",
    input: ["Honda", true],
    expected: "Year must be a number",
  },
  {
    scenario: "scenario - car name as a boolean data type",
    input: [false, 2005],
    expected: "Invalid car name data type",
  },
  {
    scenario: "scenario - car name is undefined",
    input: [undefined, 2005],
    expected: "Invalid car name data type",
  },
  {
    scenario: "scenario -  car name is null",
    input: [null, 2005],
    expected: "Invalid car name data type",
  },
  {
    scenario: "scenario - year is null",
    input: ["H9nd", null],
    expected: "Year must be a number",
  },
  {
    scenario: "scenario - year is undefined",
    input: ["Civic", undefined],
    expected: "Year must be a number",
  },
  {
    scenario: "scenario - empty string",
    input: ["", 2004],
    expected: "Car Name can't be empty",
  },
  {
    scenario: "scenario - empty string with spaces",
    input: ["                       ", 2004],
    expected: "Car Name can't be empty",
  },
];

// testing
describe("API - 1 Testing (car name and year to get value of car)", () => {
  // Positive test cases
  testCases.map((ts) => {
    it(ts.scenario, () => {
      const actual: number | string = getCarValue(ts.input[0], ts.input[1]); // Act
      expect(actual).toBe(ts.expected); // Assert
    });
  });

  // Negative test cases
  errorTestCases.map((ts) => {
    it(ts.scenario, () => {
      expect(() => getCarValue(ts.input[0], ts.input[1])).toThrow(ts.expected);
    });
  });
});
