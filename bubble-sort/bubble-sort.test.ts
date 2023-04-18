import bubbleSort from "./bubble-sort";

test("should be able to sort", () => {
  expect(bubbleSort([9, 8, 5, 2, 3, 1, 6, 4, 7])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);
});
