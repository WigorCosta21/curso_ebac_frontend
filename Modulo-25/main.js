const alunos = [
  { nome: 'João', nota: 8.5 },
  { nome: 'Maria', nota: 9.0 },
  { nome: 'Pedro', nota: 7.2 },
  { nome: 'Ana', nota: 6.8 },
  { nome: 'Lucas', nota: 8.9 },
  { nome: 'Carla', nota: 9.5 },
  { nome: 'Paulo', nota: 7.7 },
  { nome: 'Mariana', nota: 6.4 },
  { nome: 'Gustavo', nota: 8.0 },
  { nome: 'Laura', nota: 9.2 },
]

const alunosAprovados = () => {

  const aprovados = alunos.filter(aluno => {
    console.log(`O aluno ${aluno.nome} foi aprovado com nota ${aluno.nota.toFixed(2)}`)
    return aluno.nota >= 6
  })

  return aprovados
}

alunosAprovados()