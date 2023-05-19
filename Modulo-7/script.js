const numberInput1 = document.querySelector('#number-1')
const numberInput2 = document.querySelector('#number-2')
const btn = document.querySelector('#btn')
const resultSuccess = document.querySelector('.result-success')
const resultError = document.querySelector('.result-error')

function validField() {

  const number1 = Number(numberInput1.value)
  const number2 = Number(numberInput2.value)

  if (number2 > number1) {
    resultSuccess.textContent = `Validado com sucesso! ${number1} é maior que  ${number2}.`
    resultSuccess.style.display = 'block'
    resultError.style.display = 'none'

    reset()

  } else {
    resultError.textContent = `Erro! ${number1} não é maior que ${number2}.`
    resultError.style.display = 'block'
    resultSuccess.style.display = 'none'

    reset()

  }

}

function reset() {
  numberInput1.value = ''
  numberInput2.value = ''
  numberInput1.focus()
}


btn.addEventListener('click', (e) => {
  e.preventDefault()
  validField()
})