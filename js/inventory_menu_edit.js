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
const shoeButton = document.getElementById('shoes');
const coatButton = document.getElementById('coats');
const jeanButton = document.getElementById('jeans');

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

shoeButton.addEventListener('click', ()=>{
    window.location.href = 'edit_shoe.html';
});

coatButton.addEventListener('click', ()=>{
    window.location.href = 'edit_coat.html';
});

jeanButton.addEventListener('click', ()=>{
    window.location.href = 'edit_pant.html';
});