class Airport{
    constructor(airportName){
        this.airportName = airportName;
        this.planesList = [];
    }
    addPlane(plane){
        this.planesList.push(plane);
    }
    searchPlane(planeName){
        let index = -1;
        for(let i = 0; i < this.planesList.length; i++){
            if(this.planesList[i].planeName === planeName){
                index = i;
                break;
            }
        }
        if(index === -1){
            console.log("No existe el avion");
        }
        else{
            this.planesList[index].planeInfo();
        }
    }
}
class Plane{
    constructor(planeName, capacity, destination){
        this.planeName = planeName;
        this.capacity = capacity;
        this.destination = destination;
        this.passengersList = [];
    }
    getInto(name){
        if(this.passengersList.length<this.capacity){
            this.passengersList.push(name);
            console.log("Pasajero abordo");
        }
        else{
            console.log("Avion lleno");
        }
    }
    planeInfo(){
        console.log(`${this.planeName} - ${this.passengersList.length}/${this.capacity} - ${this.destination}`);
    }
}
let airport = new Airport("Aeropuerto Internacional");
let plane1 = new Plane("Avion 1", 10, "Tucuman");
let plane2 = new Plane("Avion 2", 15, "Miami");
let plane3 = new Plane("Avion 3", 8, "La Pampa");
airport.addPlane(plane1);
airport.addPlane(plane2);
airport.addPlane(plane3);
airport.searchPlane("Avion 2");
plane2.getInto("Diego");
plane2.getInto("Nicolas");
plane2.getInto("Maria");
airport.searchPlane("Avion 2");