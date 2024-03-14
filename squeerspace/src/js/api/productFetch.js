// Importing fetchData function from apiFetch.js and errorMessage function from utils.js
import { fetchData } from "./apiFetch.js";
import { errorMessage } from "../utils.js";

// Creating a new URL object from the current window location
const url = new URL(window.location);

// Extracting the 'id' parameter from the URL search parameters
const id = url.searchParams.get("id");

// Logging the id to the console for verification
console.log(id);

// Getting the HTML element with id "information-section"
const informationSection = document.getElementById("information-section");

// Checking if the 'id' parameter exists
if (id) {
 // Constructing the API URL using the 'id'
 const apiUrl = `https://api.noroff.dev/api/v1/square-eyes/${id}`;

 // Fetching data from the API
 fetchData(apiUrl)
  .then((data) => {
   // Checking if data is successfully fetched
   if (data) {
    // If data exists, render it
    renderData(data);
   } else {
    // If data does not exist, display an error message
    informationSection.innerHTML = errorMessage;
    console.log("Error fetching data. Check console for details.");
   }
  })
  .catch((err) => console.error(err));

 // Function to render data
 const renderData = (data) => {
  console.log(data);

  const {title, image, id, price, description, discountedPrice, genre, onSale, rating,  favorite} = data

  // Implementation of rendering data goes here
  const productDescription = `<div class="product-container">
  <div>
   <img src="${image}" class="product-image" alt="cover for ${title}" />
  </div>
  <div class="product-content">
   <div class="content-header">
    <h1>${title}</h1>
   </div>
   <div class="content-details"></div>
 
   <div class="content-description">
   <p>${description}</p>
   </div>
 
   <div class="content-footer">
    <p class="content-price">${price} KR</p>
    <button class="content-button">add to cart</button>
   </div>
  </div>
 </div>`;

  informationSection.innerHTML = productDescription;
 };
} else {
 // If 'id' parameter is not found, display an error message
 informationSection.innerHTML = errorMessage;
}
