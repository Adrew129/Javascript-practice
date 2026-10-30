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
    

});

document.querySelector(".main-js").innerHTML=htmlElement;
let htmlOrder='';

document.querySelectorAll('.btn-js').forEach((button)=>{
    button.addEventListener('click',()=>{
        const card= button.closest('.medicine-js');
        console.log(card);
        const select=card.querySelector('.js-selector').value;
        const medecineName=card.querySelector('.name').innerHTML;
        let OrderPrice=

        htmlOrder += `<div class="placed-order">
                        <div class="orderName">${medecineName}</div>
                        <div class="orderQuantity"${select}></div>
                        <div class="orderPrice">${}</div>
                     </div>`
    });

});