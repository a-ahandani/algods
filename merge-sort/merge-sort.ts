const mergeSort = <T>(array: T[]): T[] => {
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = <T>(left: T[], right: T[]) => {
  const result: T[] = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      const next = left.shift() as T;
      result.push(next);
    } else {
      const next = right.shift() as T;
      result.push(next);
    }
  }
  return [...result, ...left, ...right];
};

export default mergeSort;
