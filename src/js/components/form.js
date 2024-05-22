// Inputmask
const form = document.querySelector('.form')
const telSelector = form.querySelector('input[type="tel"]')
const inputMask = new Inputmask('+7 (999) 999-99-99')
inputMask.mask(telSelector)

// Validate
const validator = new window.JustValidate(form, {
  errorLabelStyle: {
    color: '#aeff0f'
  }
})
validator
  .addField('.input-name', [
    {
      rule: 'required',
      errorMessage: 'Введите имя'
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Введите 3 и более символов'
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: 'Запрещено вводить более 15 символов'
    }
  ])
  .addField('.input-mail', [
    {
      rule: 'required',
      errorMessage: 'Введите e-mail'
    },
    {
      rule: 'customRegexp',
      value: /[^@\s]+@[^@\s]+\.[^@\s]+/,
      errorMessage: 'Адрес должен быть валидным (example@email.com)'
    }
  ])
  .addField('.input-tel', [
    {
      rule: 'required',
      errorMessage: 'Введите телефон'
    },
    {
        rule: 'function',
        validator: function() {
            const phone = telSelector.inputmask.unmaskedvalue()
            return phone.length === 10
        },
        errorMessage: 'Здесь должно быть 10 символов'

    }
  ]).onSuccess((event) => {

    let formData = new FormData(event.target)

    let xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        let text

        if (xhr.status === 200) {
          text = 'Спасибо!<br>Ваша заявка отправлена.'
          showModal(text)
        } else {
          text = 'Заявка не была отправлена!<br>Попробуйте снова.'
          showModal(text)
        }
      }
    }

    xhr.open('POST', './php/mail.php', true)
    xhr.send(formData)

    event.target.reset()
})
