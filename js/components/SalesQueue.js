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

 class SalesQueue{

    // -------------------------------------
    // CONSTRUCTOR
    // -------------------------------------
    constructor(sale){
        this.sale = sale;
    }

    // -------------------------------------
    // Render
    // -------------------------------------
    render = () => {

        let component = document.createElement('div');
        component.className = 'sale';

        let id = document.createElement('div');
        id.innerHTML = 'Sale ID: '+this.sale.id;
        id.className = 'id';

        let userInfo = document.createElement('div');
        userInfo.className = 'userInfo';

        let userName = document.createElement('p');
        userName.innerHTML = "Buyer: "+this.sale.buyer;
        userName.className = 'text';
        let userAddress = document.createElement('p');
        userAddress.innerHTML = "Address: "+this.sale.address;
        userAddress.className = 'text';
        userInfo.appendChild(userName);
        userInfo.appendChild(userAddress);

        let productInfo = document.createElement('div');
        productInfo.className = 'productInfo';
        let productName = document.createElement('p');
        productName.innerHTML = 'Product: '+this.sale.productName;
        productName.className = 'text';
        let productSize = document.createElement('p');
        productSize.innerHTML = "Size: "+this.sale.size;
        productSize.className = "text";
        let total = document.createElement('div');
        total.className = "text";
        total.innerHTML = "Total: "+this.sale.total;
        productInfo.appendChild(productName);
        productInfo.appendChild(productSize);
        productInfo.appendChild(total);

        component.appendChild(id);
        component.appendChild(userInfo);
        component.appendChild(productInfo);

        return component;

    }

 }