import getDriverRating from "../Functions/API-2/getDriverRating";

const testCases: {
  scenario: string;
  input: string;
  expected: number | string;
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

describe("API - 2 Testing (claimHistory to driver rating)", () => {
  testCases.map((ts) => {
    it(ts.scenario, () => {
      // Act
      testCases.map((ts) => {
        const actual: number | string = getDriverRating(ts.input);
        // Assert
        expect(actual).toBe(ts.expected);
      });
    });
  });
});
