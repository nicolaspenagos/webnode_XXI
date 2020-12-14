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
const goBack = document.getElementById('goBack');
const logout = document.getElementById('logout');
const addButton = document.getElementById('addButton');
const nameI = document.getElementById('nameI');
const size = document.getElementById('sizeS');
const quantity = document.getElementById('quantityS');
const price = document.getElementById('priceI');

// -------------------------------------
// EVENTS
// -------------------------------------
goBack.addEventListener('click', () => {
    window.location.href = "index.html";
});

logout.addEventListener('click', () => {

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

addButton.addEventListener('click', () => {

    let ref = database.ref('products/pants/').push();

    let object = {
        productId: ref.key,
        name: nameI.value,
        size: size.value,
        price: price.value,
        quantity: quantity.value
    }

    ref.set(object).then(
        () => {
            nameI.value = '';
            price.value = '';
            window.location.href = 'index.html';
        }
    );

});