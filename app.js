// Elements
const newsletterFormEl = document.querySelector('.newsletter-form')
const emailInputEl = document.querySelector('.newsletter-form-email')
const newsletterFormSubmitEl = document.querySelector('.newsletter-form-submit')
const invalidEmailMassageEl = document.querySelector(
  '.invalid-email-required-text'
)
const newsletterImageEl = document.querySelector('.newsletter-img')

// Vars
const EmailPattern = /^\w+.*?@\w+([.]\w+)?$/
let isEmailValid = false
// EventListeners
emailInputEl.addEventListener('input', () => {
  isEmailValid = EmailPattern.test(emailInputEl.value)
  console.log('isEmailValid: ', isEmailValid)

  if (isEmailValid) {
    // Email  valid
    console.log('email valid')
    let IsMassageHidden = invalidEmailMassageEl.hasAttribute('hidden')
    !IsMassageHidden && invalidEmailMassageEl.setAttribute('hidden', '')
  } else {
    // Email NOT valid
    // TODO!: SHOW 'valid email required' ONLY if email input is NOT-FOCUSED(:not(:focus)) + make bckgc to stay white when field is empty.
    // TODO!: TRY ACHIEVE IT USING CSS ONLY(with changing the layout and :not(:focus):invalid)
    console.log('email NOT valid')
    let IsMassageHidden = invalidEmailMassageEl.hasAttribute('hidden')
    IsMassageHidden && invalidEmailMassageEl.removeAttribute('hidden')
    emailInputEl.value === '' &&
      invalidEmailMassageEl.setAttribute('hidden', '')
  }
})
newsletterFormEl.addEventListener('submit', (e) => {
  e.preventDefault()
  const formInputs = [...new FormData(newsletterFormEl)]
  console.log('formInputs: ', formInputs)
  const emailEntered = formInputs[0][1]
  // storage email at sessionStorage
  sessionStorage.setItem('emailEntered', emailEntered)
  // move page to 'success' page
  window.location.replace(
    './newsletter-sign-up-success-message.html',
    emailEntered
  )
  console.log('submit success for email', emailEntered)
})
newsletterFormSubmitEl.addEventListener('mouseover', () => {
  newsletterImageEl.classList.add('sharp-corners')
})
// TODO!: mouse out remove '.sharp-corners' class - DONE!
newsletterFormSubmitEl.addEventListener('mouseout', () => {
  newsletterImageEl.classList.remove('sharp-corners')
})
newsletterFormSubmitEl.addEventListener('click', () => {
  emailInputEl.classList.add('subscribed-failed')
  setTimeout(() => {
    emailInputEl.classList.remove('subscribed-failed')
  }, 300)
})
