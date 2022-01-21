function calculadora (operador, operandoA, operandoB) {
  console.log(operador(operandoA, operandoB))
}
//operador com arrow function
const soma = (numeroA, numeroB) => numeroA + numeroB;
const subtrair = (numeroA, numeroB) => numeroA - numeroB;
const dividir = (numeroA, numeroB) => numeroB === 0 ? NaN : numeroA / numeroB;
const multiplicar = (numeroA, numeroB) => numeroA * numeroB;
const potencia = (numeroA, numeroB) => numeroA ** numeroB;

calculadora(dividir, 2, 2);

