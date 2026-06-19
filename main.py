
"""
main.py
Comanda a execução do script JavaScript (calcular_notas.js), que lê as
notas diretamente da planilha Excel (notas.xlsx) e calcula a média
aritmética, a situação (aprovado/reprovado) e a menção (II, MI, MM, MS, SS)
de cada aluno. O resultado final é exibido em forma de tabela.
"""

import json
import subprocess
import sys
from pathlib import Path

PASTA = Path(__file__).resolve().parent
PLANILHA = PASTA / "notas.xlsx"
SCRIPT_JS = PASTA / "calcular_notas.js"


def executar_calculo_js(planilha: Path) -> list[dict]:
    """Chama o Node.js para rodar calcular_notas.js e retorna os dados em JSON."""
    resultado = subprocess.run(
        ["node", str(SCRIPT_JS), str(planilha)],
        capture_output=True,
        text=True,
        check=True,
    )
    return json.loads(resultado.stdout)


def imprimir_tabela(alunos: list[dict]) -> None:
    cabecalho = f'{"Nome":<18}{"Matrícula":<12}{"N1":>6}{"N2":>6}{"N3":>6}{"N4":>6}{"Média":>8}{"Situação":>12}{"Menção":>9}'
    print(cabecalho)
    print("-" * len(cabecalho))
    for a in alunos:
        n1, n2, n3, n4 = a["notas"]
        linha = (
            f'{a["nome"]:<18}{a["matricula"]:<12}'
            f'{n1:>6.1f}{n2:>6.1f}{n3:>6.1f}{n4:>6.1f}'
            f'{a["media"]:>8.2f}{a["situacao"]:>12}{a["mencao"]:>9}'
        )
        print(linha)


def main():
    if not PLANILHA.exists():
        print(f"Planilha não encontrada: {PLANILHA}", file=sys.stderr)
        sys.exit(1)

    alunos = executar_calculo_js(PLANILHA)
    print("Resultado final - Boletim de Notas\n")
    imprimir_tabela(alunos)


if __name__ == "__main__":
    main()
