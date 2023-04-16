class Person{
    constructor(name, age, dni, gender, weight, height, bornYear){
        if(gender==="M"||gender==="m"||gender==="H"||gender==="h"){
            this.name = name;
            this.age = age;
            this.dni = dni;
            this.gender = gender.toUpperCase();
            this.weight = weight;
            this.height = height;
            this.bornYear = bornYear;
        }
        else{
            console.error("Invalid gender");
        }
    }
    showGen(){
        if(this.bornYear>=1994 && this.bornYear<=2010){
            console.log("Z Generation");
        }
        else if(this.bornYear>=1981 && this.bornYear<=1993){
            console.log("Y Generation");
        }
        else if(this.bornYear>=1969 && this.bornYear<=1980){
            console.log("X Generation");
        }
        else if(this.bornYear>=1949 && this.bornYear<=1968){
            console.log("Baby Boom");
        }
        else if(this.bornYear>=1930 && this.bornYear<=1948){
            console.log("Silent Generation");
        }
        else{
            console.log("Not catergorized");
        }
    }
    isAdult(){
        if(this.age >= 18){
            console.log(this.name+" is an adult.");
        }
        else{
            console.log(this.name+" is not an adult.");
        }
    }
    showData(){
        console.log(`${this.name} (${this.age}) - DNI:${this.dni} - Gender:${this.gender} - Born year:${this.bornYear} - Weight:${this.weight} - Height:${this.height}`);
    }
    generateDNI(){
        const dni = Math.floor(Math.random()*89999999)+10000000;
        console.log("Generated DNI: "+ dni);
    }
}
const diegoVacaPaz = new Person("Diego Vaca Paz",21,99999999,"h",71,1.82,2001);
diegoVacaPaz.isAdult();
diegoVacaPaz.generateDNI();
diegoVacaPaz.showGen();
diegoVacaPaz.showData();