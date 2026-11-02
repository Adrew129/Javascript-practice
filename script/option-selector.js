const optionList=[{
    name:"Pannadol",
    unitPrice:500,
    quantityStock:600,
    picture:"image/panadol"
},
{
    name:"Amoxicillin",
    unitPrice:500,
    quantityStock:600,
    picture:"image/amoxicillin"
},
{
    name:"Penicillin",
    unitPrice:300,
    quantityStock:900,
    picture:"image/penicillin"
},
{
    name:"Aspirin ",
    unitPrice:300,
    quantityStock:800,
    picture:"image/aspirin"
}

];

let htmlElement="";

optionList.forEach((medicine)=>{
    const stock=medicine.quantityStock;
    let optionHtml='';

    if(stock<100){
        optionHtml=`<option selected value="${stock}">$stock</option>`;
    }
    else{
        for(let i=1; i<=Math.floor(stock/100);i++){
            optionHtml +=`<option value="${i*100}">${i*100}</option>`;
        }
    }
    
    htmlElement += `
    <div class="medicine-js">
        <div class="pic-div"><img class="css-image" src="${medicine.picture}.jpg"></div>
        <div class="name">${medicine.name}</div>
        <div class="amount">Amount:${medicine.quantityStock}</div>
        <div class="price"><b>Price:${medicine.unitPrice}Tsh/=</b></div>
        <div class="option-quantity">
            <select class="css-selector js-selector">
                ${optionHtml}
            </select>
        </div>
        <div class="order-btn">
            <button class="btn-js"
                    data-name="${medicine.name}"
                    data-price="${medicine.unitPrice}">Place Order</button>
        </div>
    </div>`;

});

document.querySelector(".main-js").innerHTML=htmlElement;
let htmlOrder='';

document.querySelectorAll('.btn-js').forEach((button)=>{
    button.addEventListener('click',()=>{
        const card= button.closest('.medicine-js');
        const select=Number(card.querySelector('.js-selector').value);
    
        const medecineName=card.querySelector('.name').innerHTML;
        const orderPriceQ=Number(button.dataset.price) * select;
        
        htmlOrder += `<div class="placed-order">
                        <div class="orderName">${medecineName}</div>
                        <div class="orderQuantity">${select}</div>
                        <div class="orderPrice">${orderPriceQ}</div>
                     </div>`;
        document.querySelector('.main-order').innerHTML = htmlOrder;
    });

});
