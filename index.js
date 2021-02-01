// emailChecker=document.querySelector('.email');
// passwordChecker=document.querySelector('.password');
// emailChecker.addEventListener('focusout',function(event){
//     console.log(event.target.textContent);
// })
// var validate=document.querySelector(".need-validation");
// validate.addEventListener('submit',function(event){
//     if(event.checkValidity()==false)
//     {
//         event.preventDefault();
//         event.stopPropagation();
//     }
//     validate.classList.add("was-validated");
// })
var validate=document.querySelector(".need-validation");;
validate.addEventListener('submit',function(event){
    var password=document.querySelector("#password");
    var confirmPassword=document.querySelector("#confirmPassword");
    if(password.value!=confirmPassword.value)
    {
        event.preventDefault();
        event.stopPropagation();
        
    }
})
