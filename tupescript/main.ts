// Define the Vehicle interface
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  // Implement the Car class that adheres to the Vehicle interface
  class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start(): void {
      console.log("Car engine started");
    }
  }
  
  // Create an instance of the Car class
  const myCar = new Car("Toyota", "Camry", 2022);
  
  // Call the start method
  myCar.start();