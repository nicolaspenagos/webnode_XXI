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
const logout =  document.getElementById('logout');
const addButton = document.getElementById('add');
const editButton = document.getElementById('edit');

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

addButton.addEventListener('click', ()=>{
    window.location.href = 'inventory_menu.html';
});

editButton.addEventListener('click', ()=>{
    window.location.href = 'inventory_menu_edit.html';
});