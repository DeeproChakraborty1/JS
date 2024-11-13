function Animal() {
  this.type = "animal";
}

Animal.prototype.sound = function() {
  console.log("Animal sound");
};

function Dog() {
  Animal.call(this); // Inherit properties from Animal
}

// Inherit prototype methods from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // Correct the constructor reference

Dog.prototype.sound = function() {
  console.log("Bark");
};

const myDog = new Dog();
myDog.sound(); // Output: Bark
