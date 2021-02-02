/*this is to show one page at a time infront*/
var login = document.querySelector('.login')
var register = document.querySelector('.signup')
var login_button = document.querySelector('.login-nav')
var reg_button = document.querySelector('.reg-nav')
register.classList.add('display-none')
login_button.classList.add('nav-color')
reg_button.addEventListener('click', function () {
  login.classList.add('display-none')
  register.classList.remove('display-none')
  login_button.classList.remove('nav-color')
  reg_button.classList.add('nav-color')
})
login_button.addEventListener('click', function () {
  register.classList.add('display-none')
  login.classList.remove('display-none')
  reg_button.classList.remove('nav-color')
  login_button.classList.add('nav-color')
})

var reg_link_click = document.querySelector('.reg-link-click')
reg_link_click.addEventListener('click', function () {
  reg_button.click()
})
var reg_link_click = document.querySelector('.log-link-click')
log_link_click.addEventListener('click', function () {
  login_button.click()
})
/*this code is to validate the password and the confirm password*/
var validate = document.querySelector('.need-validation')
var validation = document.querySelector('.validation')
validate.addEventListener('submit', function (event) {
  var password = document.querySelector('#register_password')
  var confirmPassword = document.querySelector('#register_confirmPassword')
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
