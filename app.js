
// select product list container and the total price element
const cartContainer=document.querySelector('.list-products')
const totalPrice = document.querySelector('.total')

//create a function that updates the cart on the screen

function updateTotal() {
  
  let total = 0;
 

//go through every product card and calculate their total price

document.querySelectorAll(".card-body .card-body").forEach((card) => {
  const quantity = parseInt(card.querySelector(".quantity").textContent);
  const unitPrice = parseInt(card.querySelector(".unit-price").
    textContent);
 
  total += (quantity * unitPrice);
 
  })
  //to update the total price to the screen
  totalPrice.textContent=`${total} $`
}

//create event listeners to handle click


cartContainer.addEventListener("click", function (event) {

  

  const target = event.target;
  const cardBody = target.closest(".card-body .card-body");
  

  if (cardBody) {
    const quantityElement = cardBody.querySelector(".quantity");
    let quantity = parseInt(quantityElement.textContent);

    
    //Handle increase button
    if (target.classList.contains("fa-plus-circle")) {
      quantity++;
      quantityElement.textContent = quantity;
    }
    //hande decrease quantity button
    else if (target.classList.contains("fa-minus-circle")) {
      if (quantity > 0) {
        quantity--;
        quantityElement.textContent=quantity
      }
    }
      
    

    //handle delete button ( to remove or delete)
    else if (target.classList.contains("fa-trash-alt")) {
      cardBody.remove();
      
           
    }
    //handle like button click
    else if (target.classList.contains("fa-heart")) {
      target.classList.toggle("text-danger")
    }
  }
  updateTotal();
})













