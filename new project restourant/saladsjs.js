fetch("https://restaurant.stepprojects.ge/api/Categories/GetCategory/1")
.then((response) => response.json())
  .then((products) => {
    console.log(products.products); 
    const productContainer = document.getElementById("salad");
    products.products.forEach((product) => {
      const card = createProductCard(product);
      productContainer.appendChild(card);
    });
  })
  .catch((error) => console.log(error));

function createProductCard(product) {
  const img=document.createElement('img')
  img.src=product.image;
  img.className = "img-salads"


  const cards = document.createElement("div");
  cards.classList.add("div-salads"); 


  const heading = document.createElement("h3");
  heading.innerText = product.name;
heading.className = "name-salads"

  const price = document.createElement("p");
  price.innerText = product.price;
price.className = "price-salads"

  const btn = document.createElement("button");
  btn.innerText = "Add to cart";
btn.className= "button-salads"

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