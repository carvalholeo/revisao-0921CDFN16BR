function calculadora (operador, operandoA, operandoB) {
  console.log(operador(operandoA, operandoB))
}

//operador com arrow function
const soma = (numeroA, numeroB) => numeroA + numeroB;

// operador com funções nomeadas
function subtrair(numeroA, numeroB) {
  return numeroA - numeroB;
}
function dividir(numeroA, numeroB) {
  if (numeroB === 0) {
    return NaN;
  }
  return numeroA / numeroB;
}
function multiplicar (numeroA, numeroB) {
  return numeroA * numeroB
}
function potencia (numeroA, numeroB) {
  return numeroA ** numeroB
}

calculadora(subtrair, 2, 0);

