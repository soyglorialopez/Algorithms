function insertionSort(list) {
    // invariant loop is the subarray  list[1.. i-1]
    let i, key, j
    for (i = 1; i < list.length; i++) {
  
      key = list[i];
      j = i - 1;
  
      while (j >= 0 && list[j] > key) {
        list[j + 1] = list[j];
        j = j - 1;
      };
  
      list[j + 1] = key;
    };
    return list
  }