class Person{
    constructor(name, age, job){
        this.name = name;
        this.age = age;
        this.job = job;
    }
    hello(){
        console.log(this.name + " says hello!!");
    }
    goodbye(){
        console.log(this.name + " says goodbye!!");
    }
}
const person1 = new Person("John", 21, "Lawyer");
const person2 = new Person("Mark",32,"Driver");
person1.hello();
person2.hello();
person1.goodbye();
person2.goodbye();