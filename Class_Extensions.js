class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + " makes a noise, ";
  }
}

class Cat extends Animal {
  constructor() {
    super("Mr Whiskers");
  }
  speak() {
    return super.speak() + this.name + " goes meow.";
  }
}
