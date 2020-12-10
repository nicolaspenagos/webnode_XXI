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
const login = document.getElementById('login');
const toSignUp = document.getElementById('toSingUp');

// -------------------------------------
// USER AUTHENTICATION
// -------------------------------------
auth.onAuthStateChanged(
    (user) => {

        if (user !== null) {
            window.location.href = 'index.html';
        }

    }
);

// -------------------------------------
// EVENTS
// -------------------------------------
login.addEventListener('click', () => {

    let emailValue = email.value;
    let passwordValue = password.value;

    if (emailValue != null && emailValue != '' && passwordValue != null && passwordValue != '') {

        alert(passwordValue);
        auth.signInWithEmailAndPassword(emailValue, passwordValue).then(

            (data) => {

                window.location.href = 'index.html';
                passwordInput.value = '';
                emailInput.value = '';

            }

        ).catch(

            (error) => {

                alert(error.message)
                passwordInput.value = '';
                emailInput.value = '';

            }

        );

    } else {
        alert('There cannot be empty values');
    }

});

toSignUp.addEventListener('click', () => {
    window.location.href = 'signup.html';
});