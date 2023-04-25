import binarySearch from ".";

describe("binarySearch", () => {
  it("should find x", () => {
    const actual = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6);
    expect(actual).toEqual(5);
  });
});
