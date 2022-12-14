import getDriverRating from "../Functions/API-2/getDriverRating";

// Positive test cases
const testCases: {
  scenario: string;
  input: string;
  expected: number;
}[] = [
  {
    scenario: "test case 1",
    input: "crash",
    expected: 1,
  },
  {
    scenario: "test case 2",
    input: "crash smash",
    expected: 2,
  },
  {
    scenario: "test case 3",
    input: "crash crashed Crashed",
    expected: 3,
  },
  {
    scenario: "test case 4",
    input: "0000",
    expected: 1,
  },
  {
    scenario: "test case 5",
    input: "crashing",
    expected: 1,
  },
  {
    scenario: "test case 6",
    input: "crashcrashcrashcrashcrashcrashcrash ",
    expected: 5,
  },
];

// Negative test cases
const errorTestCases: {
  scenario: string;
  input: any;
  expected: string;
}[] = [
  {
    scenario: "test case null",
    input: null,
    expected: "invalid data type",
  },
  {
    scenario: "test case undefined",
    input: undefined,
    expected: "invalid data type",
  },
  {
    scenario: "test case boolean true",
    input: true,
    expected: "invalid data type",
  },
  {
    scenario: "test case boolean false",
    input: false,
    expected: "invalid data type",
  },
  {
    scenario: "test case number",
    input: 323232,
    expected: "invalid data type",
  },
];

// testing
describe("API - 2 Testing (claimHistory to driver rating)", () => {
  // Positive Test cases
  testCases.map((ts) => {
    it(ts.scenario, () => {
      const actual: number = getDriverRating(ts.input); // Act
      expect(actual).toBe(ts.expected); // Assert
    });
  });

  // Negative test cases
  errorTestCases.map((testCase) => {
    it(testCase.scenario, () => {
      expect(() => getDriverRating(testCase.input)).toThrow(testCase.expected); // Assert
    });
  });
});
