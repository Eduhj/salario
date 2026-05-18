
const fixo = 1200
const tarefas = document.getElementById('tar')
const salario = document.getElementById('sal')

function calc() {
    const tar = Number(tarefas.value)
    if (tar > 10) salario.textContent = `R$${fixo * 1.3}`
    else if (tar > 5) salario.textContent = `R$${fixo + 100}`
    else if (tar >= 0) salario.textContent = `R$${fixo}`
    else if (tar < 0) salario.textContent = "Digite um valor válido"
}