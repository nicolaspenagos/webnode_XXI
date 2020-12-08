/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * @author Nicolas Penagos Montoya
 * nicolas.penagosm98@gmail.com
 * 
 * @author Valentina Zapata Zapata
 * valzapataz@gmail.com
 *
 * @author Nathalia Escobar
 * nataliaescfer@gmail.com
 *
 * @author Wilson Suarez
 * wilsonsuarez40@gmail.com
 **~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

// -------------------------------------
// FIREBASE CONSTANTS
// -------------------------------------
const database = firebase.database();
const auth = firebase.auth();

// -------------------------------------
// DECLARATIONS
// -------------------------------------
const email = document.getElementById('email');
const password = document.getElementById('password');
const rePassword = document.getElementById('rePassword');
const signUp = document.getElementById('signup');
const toLogin = document.getElementById('toLogin');

// -------------------------------------
// EVENTS
// -------------------------------------
signUp.addEventListener('click', () => {


    let emailValue = email.value;
    let passwordValue = password.value;
    let rePasswordValue = rePassword.value;

    if(emailValue != null && emailValue != '' && passwordValue != null && passwordValue != '' && rePasswordValue != null && rePasswordValue != ''){

        if(passwordValue != rePasswordValue){

            alert('Passwords must be the same');

            email.value = '';
            password.value = '';
            rePassword.value = '';

        }else{
            auth.createUserWithEmailAndPassword(emailValue, passwordValue);
        }

    }else{

        alert('There cannot be empty values');

        email.value = '';
        password.value = '';
        rePassword.value = '';
      
    }

});