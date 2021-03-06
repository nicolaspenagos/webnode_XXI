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
const logout = document.getElementById('logout');
const editInvetory = document.getElementById('inventory');
const viewResume = document.getElementById('resume');

// -------------------------------------
// USER AUTHENTICATION
// -------------------------------------
auth.onAuthStateChanged(

    (user) => {

        if(user!=null){
        
        }else{
            window.location.href = 'login.html';
        }

    }
   
);

// -------------------------------------
// EVENTS
// -------------------------------------
logout.addEventListener('click', ()=>{

    auth.signOut().then(

        () => {
            window.location.href = 'login.html';
        }

    ).catch(
        (error) => {
            alert(error.message);
        }
    );

});

editInvetory.addEventListener('click', () => {
    window.location.href = 'product_options.html';
});

viewResume.addEventListener('click', () => {
    window.location.href = 'resume.html';
});