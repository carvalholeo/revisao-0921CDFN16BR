const idades = [26, 32, 15, 54, 60, 27, 12, 25, 30, 150]

// const idadesOrdenadas = []
// for (let indice = 0; i < idades.length; i++) {

// }
// console.log('Idade antes de ordenar: ' + idades);
// idades.sort()
// console.log('Idades ordenadas de maneira errada: ' + idades);

// function ordenar(numeroA, numeroB) {
//   if (numeroA > numeroB) {
//     return 1
//   }

//   if (numeroA < numeroB) {
//     return -1
//   }

//   return 0
// }

// idades.sort(ordenar)
// console.log('Idades ordenadas de maneira certa: ' + idades);

// // Busca de itens com indexOf
// const indice = idades.indexOf(35)
// console.log('Índice da idade: ' + indice)

// Busca itens com filter

// Com função anônima
const maiorDeIdade = idades.filter(function(idade) {
  return idade >= 18;
});

// Com arrow function
const maiorIdadeArrowFunction = idades.filter(idade => idade >= 18);

// Filter manual
const novosMaioresDeIdade = [];
for (let index = 0; index < idades.length; index++) {
  const element = idades[index];

  if(element >= 18) {
    novosMaioresDeIdade.push(element)
  }
}

// console.log('Somente maiores de idade anonimo: ' + maiorDeIdade)
// console.log('Somente maiores de idade arrow: ' + maiorIdadeArrowFunction)
// console.log('Somente maiores de idade loop for: ' + novosMaioresDeIdade)

const alunos = [
  {
    nome: 'Leo',
    idade: 26,
    altura: 1.71
  },
  {
    nome: 'Gabriel',
    idade: 25,
    altura: 1.82
  },
  {
    nome: 'Thaissa',
    idade: 22,
    altura: 1.71
  },
  {
    nome: 'Betinha',
    idade: 263,
    altura: 1.56
  },
  {
    nome: 'lucas',
    idade: 20,
    altura: 1.56
  }
];

alunos.sort((objetoA, objetoB) => {
  if (objetoA.nome.toUpperCase() > objetoB.nome.toUpperCase()) {
    return 1;
  }

  if (objetoA.nome.toUpperCase() < objetoB.nome.toUpperCase()) {
    return -1;
  }

  return 0;
})

console.log(alunos)