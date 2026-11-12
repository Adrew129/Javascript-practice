import{cart,addToCart,updateCartQuantity} from '../data/carts.js';
import{products} from '../data/products.js';
import { formatCurrency } from './utils/money.js';

console.log("Hello loading my file on html of Amazon");
let productsHTML="";
products.forEach((product)=>{
    productsHTML+=`
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${(product.priceCents/100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-select${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-Id="${product.id}">
            Add to Cart
          </button>
    </div>`;
});
document.querySelector(".js-product-grid").innerHTML=productsHTML;
document.querySelectorAll(".js-add-to-cart").forEach((button)=>{
  button.addEventListener('click',()=>{
    //console.log(button.dataset.productName);
    const productId=button.dataset.productId;
    const quantity=Number(document.querySelector(`.js-quantity-select${productId}`).value);

    /*closest way
    const container=button.closest('.product-container');
    const quantity = Number(container.querySelector('select').value);
    */
    addToCart(productId,quantity);
    
    //calculate number quantity
    document.querySelector(".cart-quantity").innerHTML=updateCartQuantity();
    
    
  });
  
});


