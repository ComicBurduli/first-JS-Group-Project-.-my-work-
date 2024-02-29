fetch("https://restaurant.stepprojects.ge/api/Categories/GetCategory/7")
.then((response) => response.json())
  .then((products) => {
    console.log(products.products); 
    const productContainer = document.getElementById("bites");
    products.products.forEach((product) => {
      const card = createProductCard(product);
      productContainer.appendChild(card);
    });
  })
  .catch((error) => console.log(error));












  
function createProductCard(product) {
  const img=document.createElement('img')
  img.className = "soups-img"
  img.src=product.image;
  const cards = document.createElement("div");
  cards.classList.add("soups-div"); 
  const heading = document.createElement("h3");
  heading.innerText = product.name;
heading.className = "soups-h3"
  const price = document.createElement("p");
  price.innerText = product.price;
price.className = "price-soups"
  const btn = document.createElement("button");
  btn.innerText = "Add to cart";
btn.className = "soups-button"
















  btn.addEventListener("click", function () {
    const url = "https://restaurant.webwide.ge/api/Baskets/AddToBasket";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: 1,
        price: product.price,
        productId: product.id,
      }),
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  });

  cards.appendChild(heading);
  cards.appendChild(price);
  cards.appendChild(btn);
  cards.appendChild(img);
  return cards;
}