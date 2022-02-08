const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'texto.txt');

fs.readFile(caminho, {encoding: 'utf-8'}, (erro, dados) => {
  if (erro) {
    return "erro da cabeça de pamonha"
  }
})

// const conteudo = fs.readFileSync(caminho, {encoding: 'utf-8'});
// console.log(conteudo)

