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
alert('hola');
// -------------------------------------
// FIREBASE CONSTANTS
// -------------------------------------
const database = firebase.database();
const auth = firebase.auth();

// -------------------------------------
// DECLARATIONS
// -------------------------------------
const itemsContainer = document.getElementById('itemsContainer');

let prueba = {
    productId: 'w1873hsjbsjdieuwiueb',
    name: 'Black Shoe',
    size:7,
    price: 40000,
    quantity: 3
}

let prueba1 = {
    productId: 'w1873hsjbsjdieuwiueb',
    name: 'Black Shoe',
    size:7,
    price: 40000,
    quantity: 3
}

let c = new EditProductQueue(prueba);
itemsContainer.appendChild(c.render());

itemsContainer.appendChild(c.render());