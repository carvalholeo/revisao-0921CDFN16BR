const universidade = (idade) => new Promise((resolve, reject) => {
  if (idade >= 18) {
    setTimeout(() => {
      resolve('Pessoa pode fazer faculdade')
    }, 5000)
  }
  setTimeout(() => {
    reject('Pessoa não tem idade mínima')
  }, 10000)
});

module.exports = universidade;
