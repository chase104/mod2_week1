

let myArr = [43,55, 63, 5, 6, 234, 235, 547];
let stringArray = ["apple", "cherry", "date", "banana"  ];
let bubblesort = (array) => {


    // loop through the array.
    for (let i=0; i<array.length; i++) {

        for (let j=0; j<array.length-i-1; j++) {
            // here we are doing an operation
            if (array[j] > array[j+1]) {
                // flip
                let tempValue = array[j];
                array[j] = array[j+1];
                array[j+1] = tempValue;
            }
        }
    }

    console.log(array);
}
// bubblesort(myArr)
// bubblesort(stringArray)




const doBubbleSort = (unsortedArray) => {
  for (let i=0; i<unsortedArray.length; i++) {
      for (let j=0; j<unsortedArray.length - i - 1; j++){
        // swap?
        if (unsortedArray[j] > unsortedArray[j+1]) {
          let temp = unsortedArray[j]
          unsortedArray[j] = unsortedArray[j+1];
          unsortedArray[j+1] = temp
        }
      }
  }
  return unsortedArray; // now it's sorted
}

let sortedArray = doBubbleSort([2,5, 7, 6,3, 9, 78,200])
console.log(sortedArray);

console.log(doBubbleSort([9,8,7,6,5,4,3,2,1]));

const sortObjectArrayByAge = (unsortedArray) => {
  // if the length of the array is 8, we will do the j loop 8 times
  // .length times, we will do a loop
  // why this many times? - to ensure that every number is in the right spot.
  // i=2
  for (let i=0; i<unsortedArray.length; i++) {

      for (let j=0; j<unsortedArray.length - i - 1; j++){
        // swap?
        if (unsortedArray[j].age > unsortedArray[j+1].age) {
          let temp = unsortedArray[j]
          unsortedArray[j] = unsortedArray[j+1];
          unsortedArray[j+1] = temp
        }
      }

  }
  return unsortedArray; // now it's sorted
}

const people = [
  {
      name: 'Alice',
      age: 25,
      savings: 1500,
      occupation: 'Software Developer',
      favoriteDinosaur: 'T-Rex', 
  },
  {
      name: 'Bob',
      age: 30,
      savings: 2500,
      occupation: 'Architect',
      favoriteDinosaur: 'Stegosaurus',
  },
  {
      name: 'Charlie',
      age: 28,
      savings: 1000,
      occupation: 'Barista',
      favoriteDinosaur: 'Triceratops',
  },
  {
      name: 'Dana',
      age: 35,
      savings: 6000,
      occupation: 'Pilot',
      favoriteDinosaur: 'Pterodactyl',
  }
];
let returnValue = sortObjectArrayByAge(people);

console.log(returnValue);