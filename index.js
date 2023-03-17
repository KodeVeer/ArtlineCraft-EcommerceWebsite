// Create an empty carts array
let carts = [];

// Define an array of product objects
let products = [
    {
      id: 1,
      name: "Buddha Drawing",
      description: "A portrait of Gautam Buddha.",
      price: 15.99,
      image: "https://pbs.twimg.com/media/Fe3r4EWUcAArf4h.jpg"
    },
    {
      id: 2,
      name: "World Peace Drawing",
      description: "An emblem or logo drawing urging for World Peace.",
      price: 12.99,
      image: "https://pbs.twimg.com/media/FexkYZeUoAAh2b6?format=jpg&name=large"
    },
    {
      id: 3,
      name: "Plant a Tree Drawing",
      description: "A drawing giving messege that everyone should plant a tree.",
      price: 8.99,
      image: "https://pbs.twimg.com/media/FfMZ7ywUYAA_ifH?format=jpg&name=large"
    },
    {
      id: 4,
      name: "Kanha Ji with Yashoda Maa",
      description: "Drawing of little Kanha Ji playing with his mother Yashoda Ji.",
      price: 19.99,
      image: "https://pbs.twimg.com/media/FeNtH-tVIAAC3_9.jpg"
    },
    {
      id: 5,
      name: "Dropping Heart Drawing",
      description: "Drawing of dropping heart.",
      price: 24.99,
      image: "https://pbs.twimg.com/media/FeHbezpVQAE_eHx.jpg"
    },
    {
      id: 6,
      name: "Diwali Drawing",
      description: "This is portrait of Diwali festival showcasing Ram and Sita Ji coming back to Ayodhya.",
      price: 89.99,
      image: "https://pbs.twimg.com/media/FfzJijuVIAEuWuB?format=jpg&name=large"
    }
  ];
  
  // Select the product container element
  const productContainer = document.querySelector('.product-container');
  
  // Loop through the products array and display each product
  products.forEach((product) => {
    // Create a new product element
    const productElement = document.createElement('div');
    productElement.classList.add('product');
  
    // Add the product image
    const imageElement = document.createElement('img');
    imageElement.src = product.image;
    imageElement.alt = product.name + ' Image';
    imageElement.classList.add('product-image');
    productElement.appendChild(imageElement);
  
    // Add the product title
    const titleElement = document.createElement('h3');
    titleElement.textContent = product.name;
    titleElement.classList.add('product-title');
    productElement.appendChild(titleElement);
  
    // Add the product description
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = product.description;
    descriptionElement.classList.add('product-description');
    productElement.appendChild(descriptionElement);
  
    // Add the product price
    const priceElement = document.createElement('span');
    priceElement.textContent = '$' + product.price.toFixed(2);
    priceElement.classList.add('product-price');
    productElement.appendChild(priceElement);
  
    // Add the add to cart button
    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Add to Cart';
    buttonElement.classList.add('add-to-cart-button');
    productElement.appendChild(buttonElement);
  
    // Add the product element to the container
    productContainer.appendChild(productElement);
  });
  

  // Get all the "Add to Cart" buttons on the page
let addToCartButtons = document.querySelectorAll(".add-to-cart-button");

// Loop through each button and add a click event listener
addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Get the product information from the button's data attributes
    let product = {
      name: button.dataset.name,
      price: button.dataset.price,
      image: button.dataset.image
    };

    // Add the product to the carts array
    carts.push(product);

    // Alert the user that the item has been added to the cart
    alert("Item added to cart!");

    // Log the updated carts array to the console
    console.log(carts);
  });
});



