class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    perimeter(){
        return (2*this.height)+(2*this.width);
    }
    area(){
        return this.width*this.height;
    }
    getHeight(){
        return this.height;
    }
    setHeight(height){
        this.height = height;
    }
    getWidth(){
        return this.width;
    }
    setWidth(width){
        this.width = width;
    }
}
let square = new Rectangle(5,5);
console.log(square.area());
console.log(square.perimeter());