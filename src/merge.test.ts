import { merge } from "./merge";
describe("Testing merge file", () => {
  test("Test 1 : ", () => {
    const arr1: number[] = [1, 3, 4, 5, 8];
    const arr2: number[] = [2, 4, 9, 11];
    expect(merge(arr1, arr2)).toEqual([1, 2, 3, 4, 4, 5, 8, 9, 11]);
  });
  test("Test 2 : ", () => {
    const arr1: number[] = [1, 1, 1, 1, 1];
    const arr2: number[] = [2, 4, 9, 11, 13, 17];
    expect(merge(arr1, arr2)).toEqual([1, 1, 1, 1, 1, 2, 4, 9, 11, 13, 17]);
  });
  test("Test 3 : ", () => {
    const arr1: number[] = [-3, -1, 7, 11, 20];
    const arr2: number[] = [-8, 0, 4, 5, 12, 26, 28, 30];
    expect(merge(arr1, arr2)).toEqual([
      -8, -3, -1, 0, 4, 5, 7, 11, 12, 20, 26, 28, 30,
    ]);
  });
  test("Test 4 : ", () => {
    const arr1: number[] = [];
    const arr2: number[] = [1, 2, 3];
    expect(merge(arr1, arr2)).toEqual([1, 2, 3]);
  });
  test("Test 5 : ", () => {
    const arr1: number[] = [];
    const arr2: number[] = [];
    expect(merge(arr1, arr2)).toEqual([]);
  });
});
