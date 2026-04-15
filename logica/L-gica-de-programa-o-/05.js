console.log("Calculadora de IMC")
let peso,alt,nome;
let i = 0;

do {
    nome = prompt("Digite seu nome: ");
    peso = parseFloat(prompt("Digite seu peso (em kg): "))
    alt = parseFloat(prompt("Digite sua altura (em cm): "))
    alt = alt/100
       let imc = peso/(alt*alt);
   let r;
   if (imc< 18.5){
       r = 0
   } else if (imc >=18.5 && imc <= 24.9){
       r = 1
   }else if (imc >=25 && imc <= 29.9){
       r = 2
   } else if(imc >= 30 && imc <= 34.9){
       r = 3
   } else if (imc >= 35 && imc <= 39.9){
       r = 4
   } else {
       r = 5
   }
if (peso > 20){
     console.log("Seu imc é de: ",imc.toFixed(2))
    switch(r){
        case 0:
        console.log("Atenção! É importante procurar orientação nutricional")
        break;
        case 1:
          console.log("Parabéns! Você está con peso saudavel")
        break;
        case 2:
            console.log("Fique atento! Pequenas mudanças podem melhorar sua saude")
        break;
        case 3:
            console.log("Recomenda-se acompanhamento médico")
        break;
        case 4:
            console.log("Importante buscar ajuda profissional;")
        break;
        case 5:
            console.log("Risco elevado a saude")
        break;
        default:
        console.log("Algo deu errado")
    }
} else {
    console.log("Peso menor que 20kg! O programa não será executado")
} 
console.log("=================")
i++
} while (i<6)

