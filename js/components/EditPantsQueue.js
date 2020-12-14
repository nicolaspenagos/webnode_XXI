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

class EditPantsQueue{

    constructor(product){
        this.product = product;
    }

    // -------------------------------------
    // Render
    // -------------------------------------
    render = () => {

        let component = document.createElement('div');
        component.className = 'product';

        let name = document.createElement('div');
        name.className = 'name';
        name.innerHTML = this.product.name;

        let id = document.createElement('div');
        id.className = 'pid';
        id.innerHTML = 'Id: '+this.product.productId;

        let size = document.createElement('div');
        size.className = 'size';

        let sizeTitle = document.createElement('div');
        sizeTitle.className='innerTitle';
        sizeTitle.innerHTML = 'Size';

        let sizeContent = document.createElement('div');
        sizeContent.className='content';
       
        size.appendChild(sizeTitle);
        size.appendChild(sizeContent);

        let lessSizeButton = document.createElement('button');
        lessSizeButton.className = 'b';
        lessSizeButton.innerHTML = '<';

       
        
        let sizeLabel = document.createElement('div');
        sizeLabel.innerHTML = this.product.size;
        sizeLabel.className ='l';
    
        let moreSizeButton = document.createElement('button');
        moreSizeButton.className = 'b';
        moreSizeButton.innerHTML = '>';

        lessSizeButton.addEventListener('click', ()=>{

            let x = sizeLabel.innerHTML;
            if(x>28){
                x--;
                x--;
                sizeLabel.innerHTML = x;
            }

        });

        moreSizeButton.addEventListener('click', ()=>{
            let y = sizeLabel.innerHTML;
            if(y<38){
                 y++;
                 y++;
                sizeLabel.innerHTML = y;
            }

        });

        sizeContent.appendChild(lessSizeButton);
        sizeContent.appendChild(sizeLabel);
        sizeContent.appendChild(moreSizeButton);

        let quantity = document.createElement('div');
        quantity.className = 'quantity';
     
        let quantityTitle = document.createElement('div');
        quantityTitle.className = 'innerTitle';
        quantityTitle.innerHTML = 'Quantity';

        quantity.appendChild(quantityTitle);

        let quantityContent = document.createElement('div');
        quantityContent.className = 'content';

        let lessQuantity = document.createElement('button');
        lessQuantity.innerHTML = '<';
        lessQuantity.className = 'b';
    
        let moreQuantity = document.createElement('button');
        moreQuantity.innerHTML = '>';
        moreQuantity.className = 'b';

      
        let qLabel = document.createElement('div');
        qLabel.innerHTML = this.product.quantity;
        qLabel.className = 'l';

        moreQuantity.addEventListener('click', ()=>{

            let z = qLabel.innerHTML;
            z++;
            qLabel.innerHTML = z;

        });

        lessQuantity.addEventListener('click', ()=>{
            let w = qLabel.innerHTML;
            if(w>0){
                w--;
                qLabel.innerHTML = w;
            }
        });

        quantityContent.appendChild(lessQuantity);
        quantityContent.appendChild(qLabel);
        quantityContent.appendChild(moreQuantity);
        quantity.appendChild(quantityContent);

        let price = document.createElement('div');
        price.className = 'price';
        let priceTitle = document.createElement('div');
        priceTitle.className = 'pt';
        priceTitle.innerHTML = 'Price';
        price.appendChild(priceTitle);
        let priceInput = document.createElement('input');
        priceInput.className = 'pI';
        priceInput.value = this.product.price;
        price.appendChild(priceInput);

        let saveButton = document.createElement('button');
        saveButton.className = 'saveButton';
        saveButton.innerHTML = 'Save';

        saveButton.addEventListener('click', ()=>{

            let object = {
                productId: this.product.productId,
                name: this.product.name,
                size:   sizeLabel.innerHTML,
                price: priceInput.value,
                quantity: qLabel.innerHTML
            }

            database.ref('products/pants/'+object.productId).set(object);

        });

        component.appendChild(name);
        component.appendChild(id);
        component.appendChild(size);
        component.appendChild(quantity);
        component.appendChild(price);
        component.appendChild(saveButton);

        return component;

    }


 }