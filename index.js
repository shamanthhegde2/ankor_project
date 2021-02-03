/*this is to show one page at a time infront*/
let login = document.querySelector('.login')
let register = document.querySelector('.signup')
let login_button = document.querySelector('.login-nav')
let reg_button = document.querySelector('.reg-nav')
register.classList.add('display-none')
login_button.classList.add('nav-color')

function regbuttonClick() {
  login.classList.add('display-none')
  register.classList.remove('display-none')
  login_button.classList.remove('nav-color')
  reg_button.classList.add('nav-color')
}
function loginButtonClick() {
  register.classList.add('display-none')
  login.classList.remove('display-none')
  reg_button.classList.remove('nav-color')
  login_button.classList.add('nav-color')
}
reg_button.addEventListener('click', regbuttonClick)
login_button.addEventListener('click', loginButtonClick)

let reg_link_click = document.querySelector('.reg-link-click')
reg_link_click.addEventListener('click', regbuttonClick())
let log_link_click = document.querySelector('.log-link-click')
log_link_click.addEventListener('click',loginButtonClick())

/*this code is to validate the password and the confirm password*/
let validate = document.querySelector('.need-validation')
let validation = document.querySelector('.validation')
validate.addEventListener('submit', function (event) {
  let password = document.querySelector('#register_password')
  let confirmPassword = document.querySelector('#register_confirmPassword')
  if (password.value != confirmPassword.value) {
    event.preventDefault()
    event.stopPropagation()
    validation.innerHTML = '⚠ password mismatch'
  }
  setTimeout(function () {
    validation.innerHTML = ''
  }, 2000)
})

/*the end*/
