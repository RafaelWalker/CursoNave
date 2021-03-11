const subtrai = function (num1, num2) {
    return num1 - num2;
}

console.log (subtrai (100, 10));

const testaZero = (num) =>{
    if (num == 0){
        console.log("O número é zero")
    }
    else{
        console.log ("O Número não é zero")
    }
}
console.log(testaZero (9))

console.log(testaSinal(10, 10));

function testaSinal (valor1, valor2){
    if (subtrai(valor1, valor2) === 0) {
        console.log("É Zero");
    } else if 
        (((valor1 < 0) && (valor2 > 0)) || ((valor1 > 0) && (valor2 < 0))){
            console.log("Subtração entre numeros de sinais diferentes")
        } else {
            console.log("Subtração entre numeros de sinais iguais")
        }
    
}