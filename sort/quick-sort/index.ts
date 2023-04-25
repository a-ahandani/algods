const quickSort = <T>(array: T[]): T[] => {
  if (array.length <= 1) {
    return array;
  }
  const pivot = array[array.length - 1];
  const left: T[] = [];
  const right: T[] = [];

  for (let i = 0; i < array.length - 1; i++) {
    const item = array[i];
    if (item <= pivot) {
      left.push(item);
    } else {
      right.push(item);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

export default quickSort;
