
const XLSX = require("xlsx");
const path = require("path");

function obterMencao(media) {
  if (media >= 9.0) return "SS";   // Superior
  if (media >= 7.0) return "MS";   // Médio Superior
  if (media >= 5.0) return "MM";   // Médio
  if (media >= 3.0) return "MI";   // Médio Inferior
  return "II";                     // Inferior
}

function calcularMedia(notas) {
  const soma = notas.reduce((acc, n) => acc + n, 0);
  return soma / notas.length;
}

function processarPlanilha(caminhoArquivo) {
  const workbook = XLSX.readFile(caminhoArquivo);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const linhas = XLSX.utils.sheet_to_json(sheet, { defval: null });

  const resultados = linhas.map((linha) => {
    const notas = [linha["Nota 1"], linha["Nota 2"], linha["Nota 3"], linha["Nota 4"]]
      .map(Number);
    const media = calcularMedia(notas);
    const mediaArredondada = Math.round(media * 100) / 100;
    const situacao = media >= 5 ? "Aprovado" : "Reprovado";
    const mencao = obterMencao(media);

    return {
      nome: linha["Nome"],
      matricula: String(linha["Matrícula"]),
      notas,
      media: mediaArredondada,
      situacao,
      mencao,
    };
  });

  return resultados;
}

// Execução via linha de comando: node calcular_notas.js notas.xlsx
if (require.main === module) {
  const arquivo = process.argv[2] || "notas.xlsx";
  const resultados = processarPlanilha(path.resolve(arquivo));
  // Saída em JSON para o script Python consumir
  console.log(JSON.stringify(resultados));
}

module.exports = { processarPlanilha, calcularMedia, obterMencao };
