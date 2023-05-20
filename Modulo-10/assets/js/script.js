$(document).ready(function () {
  

  $('#phone').mask('(00) 00000-0000')
  $('#cpf').mask('000.000.000-00')
  $('#cep').mask('00000-000')
  $('#fullName').mask('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', {
    translation: {
      'A': { pattern: /[A-Za-z]/, optional: false }
    }
  })

  $('form').validate({
    rules: {
      fullName: {
        required: true
      },
      email: {
        required: true
      },
      phone: {
        required: true
      },
      cpf: {
        required: true
      },
      address: {
        required: true
      },
      cep: {
        required: true
      }
    },
    messages: {
      fullName: 'Digite seu nome ',
      email: 'Digite um email válido',
      phone: 'Digite um telefone válido',
      cpf: 'Digite um CPF válido',
      address: 'Digite um endereço válido',
      cep: 'Digite um CEP válido'
    }
  })
  

});


