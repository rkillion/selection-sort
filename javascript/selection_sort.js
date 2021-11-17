function selectionSort(arr) {
  //iterate through the array, copying elements to a new array. Each element will be compared to the other elements in order and placed before or after them
  console.time("runtime");
  if (arr.length===0) {return []};
  let sortedArray = [arr[0]];
  for (let i=1;i<arr.length;i++) {
    let p=0;
    while (p<sortedArray.length) {
      // debugger;
      if(arr[i]<=sortedArray[p]) {
        if (p===0) {
          // debugger;
          sortedArray = [arr[i],...sortedArray];
          break;
        } else {
          // debugger;
          sortedArray.splice(p,0,arr[i]);
          break;
        }
      } else if (p===sortedArray.length-1) {
        // debugger;
        sortedArray = [...sortedArray,arr[i]];
        break;
      }
      p++;
    }
  }
  console.timeEnd("runtime");
  return sortedArray;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
  console.log(longInput);
  console.log("=>",selectionSort(longInput));
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
