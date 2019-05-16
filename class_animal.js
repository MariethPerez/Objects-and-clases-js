class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age);
    //status no funciona con super por que?
    this.status = status;
    this.legs = 0;
    this.species = "shark";
  }
}

class Cat extends Animal {
  // Do the same here as you did for Shark - define your constructor function and any other methods you need
  constructor(name, age, status) {
    super(name, age);
    this.status = status;
    this.species = "cat";
    this.legs = 4;
  }

  introduce() {
    return super.introduce() + "  Meow meow!";
  }
}

class Dog extends Animal {
  // On your own now - you can do it :D
  constructor(name, age, status, master) {
    super(name, age, status);
    this.status = status;
    this.master = master;
    this.species = "dog";
    this.legs = 4;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
