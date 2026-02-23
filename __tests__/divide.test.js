const divide = require("../src/divide");

describe("divide function", () => {

  test("divides two positive numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("divides negative numbers", () => {
    expect(divide(-10, 2)).toBe(-5);
  });

  test("returns decimal result", () => {
    expect(divide(5, 2)).toBe(2.5);
  });

  test("throws error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });

  test("throws error when arguments are not numbers", () => {
    expect(() => divide("10", 2)).toThrow("Both arguments must be numbers");
  });

});