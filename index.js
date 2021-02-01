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
var validate=document.querySelector(".need-validation");
var validation=document.querySelector(".validation");
validate.addEventListener('submit',function(event){
    var password=document.querySelector("#password");
    var confirmPassword=document.querySelector("#confirmPassword");
    if(password.value!=confirmPassword.value)
    {
        event.preventDefault();
        event.stopPropagation();
        validation.innerHTML="⚠ password mismatch";
        
    }
    setTimeout(function(){
        validation.innerHTML="";
    },1700);
})
