// Event Listners are expensive

// Event delegation = attach one listener on a common ancestor → let event bubbling tell you which child was interacted with → act accordingly.
// It’s memory‑friendly, future‑proof for dynamically added nodes, and keeps your code DRY.

// const listOfProducts = document.getElementById("listOfProducts");

// listOfProducts.addEventListener('click', (event) => {
//     if(event.target.tagName === "LI"){
//         console.log('Clicked On: ', event.target.textContent);
//     }
// })

// Add new Element

// const newProduct = document.createElement("li");

// newProduct.innerText = "Mobile";

// listOfProducts.appendChild(newProduct);

///////////////////////////////////////////////////////////////////////

// Debouncing -->

// no data hiding / encapsulation in this

const searchbox = document.getElementById("searchHandle");

let timeoutId;
searchbox.addEventListener("input", (event) => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    console.log(event.target.value);
  }, 500);
});
