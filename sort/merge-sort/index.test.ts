import mergeSort from ".";

describe("mergeSort", () => {
  it("should sort numbers", () => {
    const array = [1, 2, 4, 3, 10, 5, 8, 7, 6, 9];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(mergeSort(array)).toEqual(expected);
  });

  it("should sort an array of strings in alphabetical order", () => {
    const arr = ["apple", "banana", "cherry", "date", "fig"];
    const expected = ["apple", "banana", "cherry", "date", "fig"];
    expect(mergeSort(arr)).toEqual(expected);
  });
});
