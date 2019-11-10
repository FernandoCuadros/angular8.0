function sum(a=0, b=0, ...rest){
    let result = a + b;
    rest.forEach(n => result += n);

    return result;
}


const sum = (a=0, b=0, ...rest) =>{
    let result = a + b;
    //rest.forEach(n => result += n);
    for(let i=0; i < rest.length; i++){
        result += rest[i];
    }
    return result;
}
const numbers = [5,5,10];
sum(...numbers);

function suma3(a, b, c){
    console.log(arguments);
}