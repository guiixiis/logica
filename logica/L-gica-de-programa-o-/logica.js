const prompt = require('prompt-sync')();

function calcularMedia(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    return (media);
}

function calcularRaizQuadrada(numero) {
    let raiz = Math.sqrt(numero)
    return (raiz);
}

function somaNumerosAleatorios() {
    let soma = 0;
    for (let i = 0; i < 5; i++ 
    ) {
        let num = Math.random() * 100; // Números aleatórios entre 0 e 100
        soma = num + soma;
        console.log('Os números são: ', num)
    }
    return soma;
}

function calcularAreaCircunferencia(raio) {
    let area = Math.PI * Math.pow(raio, 2);
    //let area=3.14*raio*raio
    return (area);
}

function menu() {
    let opcao = prompt("Escolha uma opção:\n1 - Calcular média de duas notas\n2 - Calcular raiz quadrada\n3 - Somar 5 números aleatórios\n4 - Calcular área de uma circunferência\n5 - Sair\n");

    if (opcao === '1') {
        let nota1 = parseFloat(prompt("Digite a primeira nota:"));
        let nota2 = parseFloat(prompt("Digite a segunda nota:"));
        console.log("A média é: ", calcularMedia(nota1, nota2));
    } else if (opcao === '2') {
        let numero = parseFloat(prompt("Digite um número:"));
        console.log("A raiz quadrada é: ", calcularRaizQuadrada(numero));
    } else if (opcao === '3') {
        console.log("A soma dos 5 números aleatórios é: ", somaNumerosAleatorios());
    } else if (opcao === '4') {
        let raio = parseFloat(prompt("Digite o raio da circunferência:"));
        console.log("A área da circunferência é: ", calcularAreaCircunferencia(raio));
    } else if (opcao === '5') {
        console.log("Saindo...");
        return; // Esse return faz a função parar e o programa encerrar
    } else {
        console.log("Opção inválida!");
    }
    
    menu(); // Chama o menu novamente
}

// Inicia o programa executando a função menu pela primeira vez
menu();