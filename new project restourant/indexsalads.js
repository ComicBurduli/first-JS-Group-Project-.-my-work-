fetch('https://restaurant.stepprojects.ge/api/Products/GetAll')
.then((response) => response.json())
.then((products) => {
    console.log(products); 
    const productContainer = document.getElementById("card");
    products.forEach(product => {
        const card = createProductCard(product);
        productContainer.appendChild(card);
    });
})
.catch((error) => console.log(error));
 
function createProductCard(product) {
const card = document.createElement('div')
card.className= "jsdiv";
 
const heading = document.createElement("h3")
heading.className= "js-h3";
heading.innerText = product.name;
card.appendChild(heading);
 
const image = document.createElement("img")
image.className= "js-img";
    image.src = product.image; 
    card.appendChild(image);
 
 
const price = document.createElement("p")
price.className = "js-p";
price.innerText = product.price;
card.appendChild(price);
 
const btn = document.createElement('button')
btn.className = "js-button"
btn.innerText = "buy now"
card.appendChild(btn)
 
 
 
return card;
 
 
 
}
 
 
 
 
//1
 
 
fetch('https://restaurant.stepprojects.ge/api/Categories/GetAll')
.then((response) => response.json())
.then((data) =>{
    console.log(data)
    const nav = document.getElementById("nav");
    data.forEach(product => {
        var item = document
        nav.appendChild(product.name)
    });
})
 
function createnavitem(item){
    var navitem = document.createElement('h3')
}
 






























  ///////////////////////////////////  add filter method


