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
// USER AUTHENTICATION
// -------------------------------------
var isSigningUp = false;

auth.onAuthStateChanged(

    (user) => {

        if(user!=null){
            if (isSigningUp) {

                let emailValue = email.value;
            
                let userDatabase =  {
                    id: user.uid,
                    email: emailValue,
                }

                database.ref('webUsers/'+userDatabase.id).set(userDatabase).then(
                    () => {
                        window.location.href = 'index.html';
                    }
                );

                email.value = '';
                password.value = '';
                rePassword.value = '';

            }else{

            }
        }
    }

);



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

            isSigningUp = true;
            auth.createUserWithEmailAndPassword(emailValue, passwordValue);

        }

    }else{

        alert('There cannot be empty values');

        email.value = '';
        password.value = '';
        rePassword.value = '';
      
    }

});

toLogin.addEventListener('click', () => {
    window.location.href = 'login.html';
});