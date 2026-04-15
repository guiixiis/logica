const prompt = require("prompt-sync")();

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
    let desconto = 0;

    if (forma == "a vista") {
        desconto = 0.10; // 10% de desconto
        juros = 0;
    } else if (forma == "em 2 vezes") {
        desconto = 0.05; // 5% de desconto
        juros = 0.005; // 0.5% de juros ao mês
    } else if (forma == "em 4 vezes") {
        desconto = 0; // Sem desconto
        juros = 0.01; // 1% de juros ao mês
    } else {
        desconto = 0;
        juros = 0.015; // 1.5% de juros ao mês
    }

    // Calcular valor com desconto se for à vista
    let valorComDesconto = preco * (1 - desconto);
    
    // Calcular parcelas com base na forma de pagamento
    let parcelas = 0;
    if (forma == "a vista") {
        parcelas = 1;
    } else if (forma == "em 2 vezes") {
        parcelas = 2;
    } else if (forma == "em 4 vezes") {
        parcelas = 4;
    } else {
        parcelas = 12;
    }
    
    // Calcular valor final com juros se for parcelado)
    let valorFinal = valorComDesconto;
    if (parcelas > 1) {
        // Juros compostos mensais
        valorFinal = valorComDesconto * Math.pow(1 + juros, anos * 12);
    }
    
    let valorParcela = parcelas > 0 ? valorFinal / parcelas : valorFinal;
    
    return {
        valorOriginal: preco,
        descontoAplicado: desconto * 100 + "%",
        valorComDesconto: valorComDesconto,
        taxaJuros: juros * 100 + "% ao mês",
        parcelas: parcelas,
        valorParcela: valorParcela,
        valorTotal: valorFinal
    };
}

console.log(" CÁLCULO DE PAGAMENTO DE VEÍCULOS \n");

let tipo = prompt("Digite o tipo do veículo (A, B, C, D ou E): ").toUpperCase();
let preco = obterPreco(tipo);

if (preco === null) {
    console.log("Tipo de veículo inválido!");
} else {
    console.log(`\nPreço do veículo tipo ${tipo}: R$ ${preco.toFixed(2)}`);
    
    console.log("\nOpções de pagamento:");
    console.log("1 - À vista (10% desconto)");
    console.log("2 - em 2 vezes (5% desconto + 0.5% juros)");
    console.log("3 - em 4 vezes (sem desconto + 1% juros)");
    console.log("4 - Parcelado em 12x (sem desconto + 1.5% juros)");
    
    let opcao = prompt("\nEscolha uma opção (1-4): ");
    let forma = "";
    
    switch(opcao) {
        case "1": forma = "a vista"; break;
        case "2": forma = "em 2 vezes"; break;
        case "3": forma = "em 4 vezes"; break;
        case "4": forma = "Parcelado em 12x"; break;
        default: 
            console.log("Opção inválida!");
            process.exit();
    }
    
    let anos = parseInt(prompt("Digite a quantidade de anos de financiamento: "));
    
    let resultado = calcularPagamento(preco, forma, anos);
    
    console.log("\n RESULTADO DO PAGAMENTO ");
    console.log(`Valor original: R$ ${resultado.valorOriginal.toFixed(2)}`);
    console.log(`Desconto aplicado: ${resultado.descontoAplicado}`);
    console.log(`Valor com desconto: R$ ${resultado.valorComDesconto.toFixed(2)}`);
    console.log(`Taxa de juros: ${resultado.taxaJuros}`);
    console.log(`Número de parcelas: ${resultado.parcelas}x`);
    console.log(`Valor da parcela: R$ ${resultado.valorParcela.toFixed(2)}`);
    console.log(`Valor total a pagar: R$ ${resultado.valorTotal.toFixed(2)}`);
}