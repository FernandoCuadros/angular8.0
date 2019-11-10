class Laboratorio01{

    constructor(){

    }

    //Metodo1
    metodo01(params) {
        //console.log(params);
        const {nombre, curso} = params;
        const mensaje = `${nombre}! tu estas estudiando ${curso}`; 
        console.log("Metodo01: " + mensaje);
    }

    //Metodo 2
    metodo02(...params){        
        var max = Math.max(...params);
        let min = Math.min(...params);
        console.log("Metodo02: " + (max - min));
    }
    
    //Metodo 3
    metodo03(numero, potencia){
        let value = numero ** potencia;
        this.max = value;
        console.log("Nuevo maximo: " + this.max);
        console.log("Metodo03: " + value); 
    }

    //Metodo 4
    metodo04(value){
        return new Promise((resolve, reject) => {
            //console.log('Metodo04: #numero' + value);
            if (value > 0)
                resolve("El número " + value + " es Positivo");
            else if (value == 0)
                resolve("El número " + value + " es CERO");
            else
                reject("El número " + value + " es Negativo");
                      
        });
    }

    //Metodo 5
    metodo05(...numbers){
        let acumulador = 0;
        numbers.forEach(function(value){
            acumulador += value;            
        }); 
        console.log("Metodo05: " + acumulador);
    }    
}

const lab = new Laboratorio01();
const data = {nombre: 'Fernando', edad: 36, curso:'Angular'};
lab.metodo01(data);
lab.metodo02(6, 12, 2, 5, 7, 6);
lab.metodo03(2, 3);
const numbers = [6, 0, -15, 4, 60, 25, -7, 0, -9];
numbers.forEach(function(value){
    lab.metodo04(value)
    .then((msgPos) => {
        console.log(msgPos);
    })
    .catch((msgNeg) => {
        console.log(msgNeg);
    });
})

lab.metodo05(1,2,3,4,5,6,7,8,9);
    
    