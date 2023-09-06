const John = {
    name: "John",
    age: 40,
    savings: 1000,
    children: [
      {
        name: "Anna",
        age: 20,
        savings: 500,
        children: [
          {
            name: "Lucas",
            age: 5,
            savings: 100,
            children: []
          }
        ]
      },
      {
        name: "Ella",
        age: 18,
        savings: 200,
        children: [
          {
            name: "Mia",
            age: 2,
            savings: 50,
            children: []
          }
        ]
      }
    ]
  };




let getSavings = (personObject) => {
  // base case (not calling itself!!!!)
  let savings = personObject.savings;



  if (personObject.children.length) {
    personObject.children.forEach((child) => {
      savings += getSavings(child)
    });
  } else {
    return savings;
  }

  return savings;

}

// let totalSavings = getSavings(John);

// console.log(totalSavings);

const doFactorial = (n) => {

  if (n === 1) {
    return 1
  } else {
    let newN = n*doFactorial(n-1)
    return newN
  }


}

// doFactorialLoops = (n) => {
//   let total = 1;
//   for (let i=n; i>0 i--) {
//     total 
//   }
// }
let finalResult = doFactorial(6);

console.log(finalResult);
















const person2 = {
    name: "John",
    age: 40,
    savings: 1000,
    children: [
      {
        name: "Anna",
        age: 20,
        savings: 500,
        children: [
          {
            name: "Lucas",
            age: 5,
            savings: 100,
            children: [
              {
                name: "Sam",
                age: 2,
                savings: 30,
                children: [
                  {
                    name: "Tiny",
                    age: 1,
                    savings: 10,
                    children: []
                  }
                ]
              },
              {
                name: "Eva",
                age: 3,
                savings: 40,
                children: []
              }
            ]
          }
        ]
      },
      {
        name: "Ella",
        age: 18,
        savings: 200,
        children: [
          {
            name: "Mia",
            age: 2,
            savings: 50,
            children: [
              {
                name: "Elly",
                age: 1,
                savings: 20,
                children: [
                  {
                    name: "Nano",
                    age: 0.5,
                    savings: 5,
                    children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  







  // // Recursive function to calculate total family savings
  // function totalSavings(person) {
  //   let sum = person.savings;
  
  //   for (let child of person.children) {
  //     sum += totalSavings(child);
  //   }
  
  //   return sum;
  // }
  
  // console.log(totalSavings(person)); // Expected output: 1955
  
  
  //  Recursive function to calculate total family savings

  const returnSavingsOfFamily = (person) => {

  }
  
























  

  function flattenArray(arr) {
    if (!Array.isArray(arr)) {
        return [arr];
    }

    let flat = [];
    for (let i = 0; i < arr.length; i++) {
        flat = flat.concat(flattenArray(arr[i]));  // Recursion here!!!
    }

    return flat;
}

// Example:
// const nestedArray = [1, [2, [3, [4, 5], 6], 7], 8];
// const flat = flattenArray(nestedArray);
// console.log(flat); // [1, 2, 3, 4, 5, 6, 7, 8]
