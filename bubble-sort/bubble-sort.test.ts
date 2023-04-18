import bubbleSort from "./bubble-sort";

// Test cases for bubbleSort function
describe("bubbleSort", () => {
  it("should sort an array of numbers in ascending order", () => {
    const arr = [5, 3, 8, 4, 1];
    const expected = [1, 3, 4, 5, 8];
    expect(bubbleSort(arr)).toEqual(expected);
  });

  it("should return an empty array if input array is empty", () => {
    const arr = [];
    const expected = [];
    expect(bubbleSort(arr)).toEqual(expected);
  });

  it("should return the same array if it is already sorted", () => {
    const arr = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    expect(bubbleSort(arr)).toEqual(expected);
  });

  it("should sort an array of strings in alphabetical order", () => {
    const arr = ["apple", "banana", "cherry", "date", "fig"];
    const expected = ["apple", "banana", "cherry", "date", "fig"];
    expect(bubbleSort(arr)).toEqual(expected);
  });
});
