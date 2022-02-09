const universidade = require('./promises')

console.log('antes da promise')

// universidade(47)
//   .then((dados) => {
//     console.log(dados)
//   })
//   .catch((erro) => {
//     console.error(erro)
//   })

async function executada() {
  try {
    const resposta = await universidade(11);
    console.log(resposta);
  } catch (batata_murcha) {
    console.trace(batata_murcha)
  }
}

executada()

console.log('depois da promise')
