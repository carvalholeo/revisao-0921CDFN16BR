const universidade = require('./promises')

console.log('antes da promise')
console.log(universidade(47))
universidade(47)
  .then((dados) => {
    console.log(dados)
  })
  .catch((erro) => {
    console.error(erro)
  })
console.log('depois da promise')
