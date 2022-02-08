// Criação do objeto de exemplo
const biblioteca = {
  dono: 'Leonardo',
  quantidadeLivros: 30,
  quantidadeLidos: 8,
  localizacao: 'Guarujá',
  mostraLocalizacao: function() {
    console.log(`A biblioteca de ${this.dono} está no ${this.localizacao}`);
  },
  mostraLivrosLidos: function() {
    console.log(`${this.dono} já leu ${this.quantidadeLidos} livros`);
  },
  mostraQuantidadeLivros: function() {
    console.log(`${this.dono} possui ${this.quantidadeLivros} livros`);
  },
  mostraProprietario: function() {
    console.log(`${this.dono} possui a biblioteca`);
  }
}

// Execução dos métodos do objeto biblioteca
biblioteca.mostraLivrosLidos();
biblioteca.mostraLocalizacao();
biblioteca.mostraQuantidadeLivros();
biblioteca.mostraProprietario();
// console.log('Valor do dono: ' + biblioteca.dono);

console.log('-------------------------------------------');

// Altera dados da biblioteca
biblioteca.dono = 'Ana';
biblioteca.localizacao = 'Rússia';
biblioteca.quantidadeLidos = 50;
biblioteca.quantidadeLivros = 3;
// console.log('Novo dono: ' + biblioteca.dono);

biblioteca.mostraLivrosLidos();
biblioteca.mostraLocalizacao();
biblioteca.mostraQuantidadeLivros();
biblioteca.mostraProprietario();