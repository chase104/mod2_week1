

const merge = (arr1, arr2) => {
    let tempArr = [];
    while (arr1.length && arr2.length) {
      // keep comparing the smallest in both and pushing the smallest one!
      if (arr1[0] < arr2[0]) {
        tempArr.push(arr1.shift())
      } else {
        tempArr.push(arr2.shift())
      }
    }
    tempArr = [...tempArr, ...arr1, ...arr2]
    return tempArr;
  }
  
  const mergeSort = (array) => {
    if (array.length < 2) {
      return array;
    }
    const middleIndex = array.length/2
    const left = array.splice(0, middleIndex);
    return merge(mergeSort(left), mergeSort(array))
  }
  
  