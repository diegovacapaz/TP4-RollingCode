let auto = {
    color: "Gris",
    marca: "Renault",
    modelo: "Clio",
    prendido: true,
    encender: function(){
        this.prendido = true;
        console.log("El auto se encendió");
    },
    apagar: function(){
        this.prendido = false;
        console.log("El auto se apagó");
    },
    mostrarInfo: function(){
        console.log(`${this.marca} ${this.modelo} - Color: ${this.color}`);
    }
}
auto.mostrarInfo();
auto.apagar();
auto.encender();