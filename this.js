// Criação do objeto de exemplo
const biblioteca = {
  dono: 'Leonardo',
  quantidadeLivros: 30,
  quantidadeLidos: 8,
  localização: 'Guarujá',
  mostraLocalizacao: () => {
    console.log('A biblioteca de Leonardo está no Guarujá');
  },
  mostraLivrosLidos: () => {
    console.log('Leonardo já leu 8 livros');
  },
  mostraQuantidadeLivros: () => {
    console.log('Leonardo possui 30 livros');
  },
  mostraProprietario: () => {
    console.log('Leonardo possui a biblioteca');
  }
}

// Execução dos métodos do objeto biblioteca
biblioteca.mostraLivrosLidos();
biblioteca.mostraLocalizacao();
biblioteca.mostraQuantidadeLivros();
biblioteca.mostraProprietario();

