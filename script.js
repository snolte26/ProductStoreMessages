var products = [
  {
    id:0,
    name:"Apples",
    price:"2.99",
    image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color:"red"
  },
  {
    id:1,
    name:"Bananas",
    price:"2.50",
    image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color:"gold"
  },
  {
    id:2,
    name:"oranges",
    price:"3.50",
    image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color:"orange"
  }
];

// DO NOT EDIT THE ARRAY TO COMPLETE THE ASSIGNMENT

// Create a div and give it a class of "popUp". Append that div to the body 

// If I click on the popUp div, it should hide it

// Create a div for each item in the array above

// inside of each div, the prodcut Name and Price should be written as "Name: value" and "Price: $#.##";

// inside of each div, the product's image should be on top of the text

// when hovering over a product, its border color should change to the "color" of that product. Once you hover off, it should return to black

// When Clicking on a product, it should display the popUp Menu over all the content

// When clicking on the paticular product, that products image, name, and price should be displayed inside the popUp div just like it does in its own product div. No other products information shold be shown.

var wrapEle = document.body.querySelector(".wrapper");

function produce(fruit){
  var that = this;
  this.name = "Name: " + fruit.name;
  this.ele = document.createElement("div");
  this.ele.classList.add("product");
  
  this.eleFruitImg = document.createElement("div");
  this.eleFruitName = document.createElement("p");
  this.eleFruitPrice = document.createElement("p");
  
  this.price = fruit.price;
  this.color = fruit.color;
  // this.image = fruit.image;
  this.image = "<img src='" + fruit.image + "'/>";
  this.id = fruit.id;
  
  
  this.eleFruitImg.innerHTML = this.image;
  this.eleFruitName.innerHTML = this.name;
  this.eleFruitPrice.innerHTML = "Price: $" + this.price;
  this.ele.appendChild(this.eleFruitImg);
  this.ele.appendChild(this.eleFruitName);
  this.ele.appendChild(this.eleFruitPrice);
  

  this.ele.onclick = function(){poppingUp(fruit)};
  this.ele.addEventListener("mouseover", function(){
    that.ele.style.borderColor = fruit.color;
  });
  this.ele.addEventListener("mouseout", function(){
    that.ele.style.borderColor = "black";
  });
  
  
  
  document.body.querySelector(".wrapper").appendChild(this.ele);
}


function poppingUp(fruit){
  var that = this;
  this.name = "Name: " + fruit.name;
  this.ele = document.createElement("div");
  this.ele.classList.add("popUp");
  
  this.eleFruitImg = document.createElement("div");
  this.eleFruitName = document.createElement("p");
  this.eleFruitPrice = document.createElement("p");
  
  this.price = fruit.price;
  this.color = fruit.color;
  // this.image = fruit.image;
  this.image = "<img src='" + fruit.image + "'/>";
  
  
  this.eleFruitImg.innerHTML = this.image;
  this.eleFruitName.innerHTML = this.name;
  this.eleFruitPrice.innerHTML = "Price: $" + this.price;
  this.ele.appendChild(this.eleFruitImg);
  this.ele.appendChild(this.eleFruitName);
  this.ele.appendChild(this.eleFruitPrice);
  
  this.ele.onclick = function(){
    this.remove();
  };
  
  document.body.querySelector(".wrapper").appendChild(this.ele);
  
}


function start(){
  for (var i=0; i<products.length; i++){
    produce(products[i])
  }
}


start();