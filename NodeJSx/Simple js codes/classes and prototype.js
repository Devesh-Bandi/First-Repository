// Define a superclass
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Method in the prototype
  makeSound() {
    return "Some generic sound";
  }
}

// Create a subclass that extends Animal
class Dog extends Animal {
  constructor(name, breed) {
    // Call the superclass constructor using super()
    super(name);
    this.breed = breed;
  }

  // Override the makeSound method
  makeSound() {
    // Call the superclass method using super.makeSound()
    return super.makeSound() + " - Woof!";
  }

  // New method specific to Dog class
  fetching() {
    return "Fetching the ball!";
  }
}

// Prototype explanation
// Add a method to the Animal prototype
Animal.prototype.sleep = function () {
  return `${this.name} is sleeping`;
};

// Instantiate an object of the Dog class
const myDog = new Dog("Buddy", "Golden Retriever");

// Access properties and methods
console.log(myDog.name); // Output: Buddy
console.log(myDog.breed); // Output: Golden Retriever
console.log(myDog.makeSound()); // Output: Some generic sound - Woof!
console.log(myDog.fetching()); // Output: Fetching the ball!
console.log(myDog.sleep()); // Output: Buddy is sleeping

// Check inheritance using instanceof
console.log(myDog instanceof Dog); // Output: true
console.log(myDog instanceof Animal); // Output: true
