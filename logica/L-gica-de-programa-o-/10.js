const prompt = require("prompt-sync")();
function categorizarPacote(valor) {
    if (valor < 3000) return "Econômico";
    else if (valor <= 5000) return "Intermediário";
    else if (valor <= 7000) return "Avançado";
    else if (valor <= 10000) return "Premium";
    else if (valor <= 15000) return "Luxo";
    else return "Valor fora das categorias";
}

function calcularJurosCompostos(principal, taxa, tempo) {
    return principal * Math.pow((1 + taxa), tempo);
}

function calcularPagamento(valor, opcao) {
    if (opcao === 1) {
        // À vista com 12% de desconto
        return valor * 0.88;
    } 
    else if (opcao === 2) {
        // Entrada 40% + restante com 6% ao ano
        let entrada = valor * 0.4;
        let restante = valor * 0.6;
        let totalComJuros = calcularJurosCompostos(restante, 0.06, 3);
        return {
            total: entrada + totalComJuros,
            parcelas: totalComJuros / 36
        };
    } 
    else if (opcao === 3) {
        // Entrada e saída 
        let entrada = valor * 0.2;
        let restante = valor * 0.8;
        let totalcomJuros = calcularJurosCompostos(restante, 0.10, 3);
        return {
            total: entrada + totalcomJuros,
            parcelas: totalcomJuros / 36
        };
    } 
    else {
        return "Opção inválida, Tente novamente.!!";
    }
}

// executar o programa 
let valorPacote = Number(prompt("Digite o valor do pacote:"));
let opcaoPagamento = Number(prompt(
    "Escolha a sua forma de pagamento:\n1 - à vista (12% desconto)\n2 - 40% entrada + 6% ao ano\n3 - 20% entrada + 10% ao ano"
));

let categoria = categorizarPacote (valorPacote);
console.log("categoria:", categoria);

let resultado = calcularPagamento (valorPacote, opcaoPagamento);

if (typeof resultado === "object") {
    console.log("Total a pagar:",   resultado.total.toFixed(2));
    console.log("Parcelas (36x):",  resultado.parcelas.toFixed(2));
} else {
    console.log("Total a pagar:", resultado.toFixed(2));
}
