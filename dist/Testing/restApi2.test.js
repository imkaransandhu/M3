"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getDriverRating_1 = __importDefault(require("../Functions/API-2/getDriverRating"));
// Positive test cases
const testCases = [
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
const errorTestCases = [
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
            const actual = (0, getDriverRating_1.default)(ts.input); // Act
            expect(actual).toBe(ts.expected); // Assert
        });
    });
    // Negative test cases
    errorTestCases.map((testCase) => {
        it(testCase.scenario, () => {
            expect(() => (0, getDriverRating_1.default)(testCase.input)).toThrow(testCase.expected); // Assert
        });
    });
});
