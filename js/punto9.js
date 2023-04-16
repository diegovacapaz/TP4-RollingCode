class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    playSound(){
        console.log(`${this.name} hizo un ruido`);
    }
}
class Dog extends Animal{
    constructor(name, age){
        super(name, age);
    }
    playSound(){
        console.log(`${this.name} ha ladrado`);
    }
}
class Cat extends Animal{
    constructor(name, age){
        super(name, age);
    }
    playSound(){
        console.log(`${this.name} ha maullado`);
    }
}
let dog = new Dog("Bobbie",5);
let cat = new Cat("Kittie",2);
dog.playSound();
cat.playSound();