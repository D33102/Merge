export function merge(
  collection_1: number[],
  collection_2: number[]
): number[] {
  let array1_length: number = collection_1.length;
  let array2_length: number = collection_2.length;
  let merge_array: number[] = [];
  let idx1 = 0;
  let idx2 = 0;
  for (let i = 0; i < array1_length + array2_length; i++) {
    if (collection_2[idx2] <= collection_1[idx1] || idx1 >= array1_length) {
      merge_array.push(collection_2[idx2++]);
    } else {
      merge_array.push(collection_1[idx1++]);
    }
  }
  return merge_array;
}
