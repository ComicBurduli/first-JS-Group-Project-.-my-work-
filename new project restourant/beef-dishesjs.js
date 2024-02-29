fetch("https://restaurant.stepprojects.ge/api/Categories/GetCategory/4")
.then((response) => response.json())
  .then((products) => {
    console.log(products.products); 
    const productContainer = document.getElementById("beef-dishes");
    products.products.forEach((product) => {
      const card = createProductCard(product);
      productContainer.appendChild(card);
    });
  })
  .catch((error) => console.log(error));

function createProductCard(product) {
  const img=document.createElement('img')
  img.src=product.image;
  img.className = "img"



  const cards = document.createElement("div");
  cards.classList.add("column1-beef"); 
  const heading = document.createElement("h3");
  heading.innerText = product.name;
    heading.classList = "h3-beef"
  const price = document.createElement("p");
  price.innerText = product.price;
price.className = "price-beef"
  const btn = document.createElement("button");
  btn.className= "button-beef"
  btn.innerText = "Add to cart";

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