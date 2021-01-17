var jogadorNome;
var jogadorPontos = 0;
var jogadorEscolha = 0;

var computadorEscolha = 0;
var computadorPontos = 0;

// Numero aleatorio
// 1 - Pedra
// 2 - Papel
// 3 - Tesoura
function sortear(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// numero em string
// 1 - Pedra
// 2 - Papel
// 3 - Tesoura
function traduzirEscolha(numero) {
  if(numero == 1) {
    return 'Pedra';
  }
  else if(numero == 2) {
    return 'Papel';
  }
  else if(numero == 3) {
    return 'Tesoura';
  }
}

// Adiciona a classe selecionado
function selecionar(tipo, escolha) {
  document.getElementById(tipo + '-escolha-' + escolha).classList.add('selecionado');
}

// Remove a classe selecionado
function deselecionar(tipo, escolha) {
  document.getElementById(tipo + '-escolha-' + escolha).classList.remove('selecionado');
}

// Escreve na tela uma mensagem
function mensagem(texto){
  document.getElementById('mensagem').innerHTML = texto;
}

// Escreve no placar o nome do jogador
function definirJogadorNome(nome) {
  document.getElementById('jogador-nome').innerHTML = nome;
}

// Calcula e retorna quem ganhou
// 0 - Empate
// 1 - Jogador
// 2 - Computador
function calcularEscolha(jogador, computador) {
  if (jogador ==  computador) {
    return 0;
  }
  else if ((jogador == 1 && computador == 3) || jogador == computador+1) {
    return 1;
  }
  else if ((jogador == 3 && computador == 1) || jogador == computador-1) {
    return 2;
  }
}

// Soma os pontos do jogador
function somarPontoJogador() {
  jogadorPontos++;
  document.getElementById('jogador-pontos').innerHTML = jogadorPontos;
}

// Soma os pontos do computador
function somarPontoComputador() {
  computadorPontos++;
  document.getElementById('computador-pontos').innerHTML = computadorPontos;
}

// Função de jogar
function jogar(escolha) {
  jogadorEscolha = escolha;
  selecionar('jogador', jogadorEscolha);

  computadorEscolha = sortear(1, 3);
  selecionar('computador', computadorEscolha);

  var ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);

  if (ganhador == 0) {
    mensagem('Empate');
  }
  else if (ganhador == 1) {
    mensagem('Ponto para ' + jogadorNome);
    somarPontoJogador();
  }
  else if (ganhador == 2) {
    mensagem('Ponto para Computador');
    somarPontoComputador();
  }
  //tempo para selecionar e deselecionar
  setTimeout(function() {
    deselecionar('jogador', jogadorEscolha);
    deselecionar('computador', computadorEscolha);
    mensagem(jogadorNome + ' escolha uma opção...');
  }, 1500);
}

document.getElementById('jogador-escolha-1').onclick = function(){ jogar(1); };
document.getElementById('jogador-escolha-2').onclick = function(){ jogar(2); };
document.getElementById('jogador-escolha-3').onclick = function(){ jogar(3); };

jogadorNome = prompt("Qual é o seu nome?");
if(jogadorNome == "") {
    jogadorNome = 'Jogador';
}
definirJogadorNome(jogadorNome);

mensagem('Bem-vindo ' + jogadorNome + '! Escolha uma opção...');