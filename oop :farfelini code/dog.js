import Animal from './animal.js';

// console.log(Animal);
// console.log('Animal');


class Dog extends Animal {
    constructor(name, age, legs, fur) {
        super(name, age);
        this.legs = legs;
        this.fur = fur;
    }

    printInfo() {
        super.getInfo()
        console.log(this.legs, this.fur);
    }
}

const dog1 = new Dog("Toriukas", 3, 4, "baltas");
console.log(dog1);
dog1.printInfo();

