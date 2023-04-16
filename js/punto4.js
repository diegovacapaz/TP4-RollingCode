class Product{
    constructor(code, name, price){
        this.code = code;
        this.name = name;
        this.price = price;
    }
    showDetails(){
        console.log(`[${this.code}] ${this.name} - $${this.price}`);
    }
}
let products = [];
const cocaCola = new Product(45,"Coca Cola 2L",350);
const oreoCookies = new Product(37,"Oreo Classic",200);
const milk = new Product(9,"Milk Manfrey 1L",100);

products.push(cocaCola);
products.push(oreoCookies);
products.push(milk);

products.forEach((product)=>{
    product.showDetails();
});