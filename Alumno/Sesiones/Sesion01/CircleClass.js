class Circle{
    PI = 3.4142;
    constructor(radio){
        this.radio = radio;
    }

    getArea(){
        return this.PI * this.radio * this.radio;
    }
}

let circle = new Circle(50);
console.log("Área: " + circle.getArea());