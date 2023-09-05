

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
bubblesort(myArr)
bubblesort(stringArray)



let myName = "chase";


const dynamicString = `My name is ${myName}`


function App() {
  return (
    <>
      <h1>First React App!!!!!!!!!</h1>
      <AboutPage />
    </>
  )
}

App()