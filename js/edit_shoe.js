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
const itemsContainer = document.getElementById('itemsContainer');
const logout = document.getElementById('logout');
const goBack = document.getElementById('goBack');

// -------------------------------------
// DATA READING
// -------------------------------------
database.ref('products/shoes/').on('value', function(data){

    itemsContainer.innerHTML = '';
    data.forEach(
        currentShoe => {

            let val = currentShoe.val();
            let shoeQueue = new EditShoeQueue(val);
            itemsContainer.appendChild(shoeQueue.render());

        }
    );

});

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

goBack.addEventListener('click', ()=>{
    window.location.href = "index.html";
});