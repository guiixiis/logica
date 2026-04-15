function obterPreco(tipo) {
  switch (tipo) {
    case "A": return 53000;
    case "B": return 83000;
    case "C": return 100000;
    case "D": return 120000;
    case "E": return 145000;
    default: return null;
  }
}

function calcularPagamento(preco, forma, anos) {
  let juros = 0;

  if (forma === "vista") {
    return {
      total: preco * 0.9,
      juros: 0
    };
  }

  if (forma === "metade") juros = 0.005;
  if (forma === "quarto") juros = 0.01;

  let total = preco + (preco * juros * anos);

  return {
    total,
    juros
  };
}

// Entrada
let tipo = prompt("Tipo (A-E):").toUpperCase();
let forma = prompt("Forma (vista, metade, quarto):");
let anos = parseInt(prompt("Anos (máx 4):"));

// Processo
let preco = obterPreco(tipo);

if (preco === null) {
  console.log("Tipo inválido!");
} else {
  let resultado = calcularPagamento(preco, forma, anos);
  let parcela = resultado.total / (anos * 12);

  // Saída
  console.log("Preço original:", preco.toFixed(2));
  console.log("Juros:", (resultado.juros * 100) + "% ao ano");
  console.log("Total:", resultado.total.toFixed(2));
  console.log("Parcela mensal:", parcela.toFixed(2));
}
