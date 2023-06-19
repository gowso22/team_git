const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartItemsList = document.querySelector(".cart-items");
// console.log(addToCartButtons);

//반복문 사용
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    //previousElementSibling 이전의 tag에 접근
    const productName =
      button.previousElementSibling.previousElementSibling.textContent;
    const productPrice = button.previousElementSibling.textContent;
    addToCart(productName, productPrice);
  });
});

function addToCart(name, price) {
  // create a new li element
  const cartItem = document.createElement("li");
  cartItem.textContent = `${name} - ${price}`;
  cartItemsList.appendChild(cartItem);
}
