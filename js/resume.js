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
// --------------------------------------
const database = firebase.database();
const auth = firebase.auth();

// -------------------------------------
// USER AUTHENTICATION
// -------------------------------------
auth.onAuthStateChanged(
    (user) => {

        if (user !== null) {
           
        }else{
            window.location.href = 'login.html';
        }

    }
);

// --------------------------------------
// DECLARATIONS
// --------------------------------------
const goBack = document.getElementById('goBack');
const sales = document.getElementById('salesContainer');
const logout = document.getElementById('logout');

// --------------------------------------
// EVENTS
// --------------------------------------
goBack.addEventListener('click', ()=>{
    window.location.href = "index.html";
});

// -------------------------------------
// DATA READING
// -------------------------------------
database.ref('sales/').on('value', function(data){

    sales.innerHTML = '';
    data.forEach(
        currentSale => {

            let val = currentSale.val();
            let saleQueue = new SalesQueue(val);
            sales.appendChild(saleQueue.render());

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