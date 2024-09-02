// get emailEntered from sessionStorage
const emailEntered = sessionStorage.getItem('emailEntered')
console.log('emailEntered: ', emailEntered)
// Elements
const emailDetailsEl = document.querySelector('.email-details')
const dismissMessageBtn = document.querySelector('.btn')
// assign email in the element
emailEntered && (emailDetailsEl.textContent = emailEntered)
// EventListeners
dismissMessageBtn.addEventListener('click', () => {
  console.log('location: ', location)

  location.href = 'index.html'
})
