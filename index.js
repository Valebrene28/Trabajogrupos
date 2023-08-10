const numeros = [10, 2, 6, 70];
  
const resultado = numeros.reduce(suma);

console.log(resultado);

function suma(a, b) {
    return a + b;
  }
  
