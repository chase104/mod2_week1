


const returnCar = (make, model) => {
    const newCar = { make: make, model: model }
    return newCar
  }
  
  const myCar = returnCar("Hyundai", "Sonata");
  const cynthiaCar = returnCar("Ford", "F-150");
  
  console.log(myCar)
  console.log(cynthiaCar)
  
  
  //{make: ? model: ?}
  class Car {
    constructor(make, model){
      this.make = make;
      this.model = model;
    }
  }
  
  
  const mySuperCar = new Car("hyundai", "Sonata")
  const cynthiaSuperCar = new Car("Ford", "F150")
