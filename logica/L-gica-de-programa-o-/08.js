const prompt = 
require("prompt-sync")();
let tipo = 
prompt("Digite o tipo do carro (A, B, C, D ou E):").toUpperCase();
let formaPagamento = 
prompt("Forma de pagamento: a vista, em 2 vezes ou em 4 vezes:");
let anos = 
parseInt(prompt("Em quantos anos vai pagar (máx 4)?"));

let preco;

switch (tipo) {
  case "A":
    preco =
     53000;
    break;
  case "B":
    preco = 
    83000;
    break;
  case "C":
    preco = 
    100000;
    break;
  case "D":
    preco = 
    120000;
    break;
  case "E":
    preco = 
    145000;
    break;
  default:
   console.log
   ("Tipo inválido!");
    break;
}

let juros = 0;

switch (formaPagamento) {
  case "a vista":
    preco = preco * 0.9; 
    break;

  case "em 2 vezes":
    juros = 0.5 / 100; 
    break;

  case "em 4 vezes":
    juros = 1 / 100; 
    break;

  default:
    console.log("Forma de pagamento inválida!");
}

let total = preco + (preco * juros * anos);
let parcela = total / (anos * 12);

console.log("Preço original:", preco.toFixed(2));
console.log("Juros:", (juros * 100) + "% ao ano");
console.log("Valor total:", total.toFixed(2));
console.log("Parcelas:", parcela.toFixed(2));
