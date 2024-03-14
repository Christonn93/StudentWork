import { fetchData } from "./apiFetch.js";

const apiUrl = "https://api.noroff.dev/api/v1/square-eyes";
fetchData(apiUrl)
 .then((data) => {
  if (data) {
   renderData(data);
  } else {
   // Handle null data (error occurred)
   console.log("Error fetching data. Check console for details.");
  }
 })
 .catch((err) => console.error(err));

const renderData = (data) => {
 console.log("data:", data);

 const movieCard = data.map((e) => {
  return `<a href="./pages/product.html?id=${e.id}">
            <div class="card-base" style="background-image: url(${e.image})">
            </div>
        </a>`;
 });

 const itemContainer = document.getElementById("recommendation");

 itemContainer.innerHTML = movieCard;
};
