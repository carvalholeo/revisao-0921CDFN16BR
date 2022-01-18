const idades = [26, 32, 15, 54, 60, 27, 12, 25, 30, 150]

// const idadesOrdenadas = []
// for (let indice = 0; i < idades.length; i++) {

// }
console.log('Idade antes de ordenar: ' + idades);
idades.sort()
console.log('Idades ordenadas de maneira errada: ' + idades);

function ordenar(numeroA, numeroB) {
  if (numeroA > numeroB) {
    return 1
  }

  if (numeroA < numeroB) {
    return -1
  }

  return 0
}

idades.sort(ordenar)
console.log('Idades ordenadas de maneira certa: ' + idades);