function Circle(radio){
    this.radio = radio;
    this.PI = 3.4142;
}

Circle.prototype.area = function(){
    return this.PI * this.radio * this.radio;
}

let cp = new Circle(50);
console.log("Área en prototype: " + cp.area());

cp.__proto__.saludar = function(){
    console.log("magia"); 
 }