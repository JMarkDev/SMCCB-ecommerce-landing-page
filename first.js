console.log('Hey! this is me seroy cute!');

function clickLoginButton(){
   // alert('Login button has been clicked!')

    var loginTextbox = document.getElementById('login-textbox');
    var passwordTextbox = document.getElementById('password-textbox');

   console.log(loginTextbox.value);
   console.log(passwordTextbox.value);

   if(loginTextbox.value=='' || passwordTextbox.value==''){
    alert('All fields are required!');
   }

   if(loginTextbox.value==''){
    loginTextbox.classList.add('login-error');
   }
   else{
    loginTextbox.classList.remove('login-error');

   }

   if(passwordTextbox.value==''){
    passwordTextbox.classList.add('login-error');
   }
   else{
    passwordTextbox.classList.remove('login-error');
   }
}