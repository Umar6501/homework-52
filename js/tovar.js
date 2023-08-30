let cartProducts = JSON.parse(localStorage.getItem("cartProducts"));

const searchInput = document.getElementById("search-input");
const rowProducts = document.querySelector(".cards");

function displayProducts(products) {
  rowProducts.innerHTML = "";
  let str = "";
  products.map((product) => {
    str += `
            <div class="col">
            <div class="card">
              <img src='${product.images[0]}' alt="Product img" />
              <div class="card-footer">
                <h3>${product.name}</h3>
                <p>
                  ${product.description}
                </p>
                <button>-</button>${product.numberOfProduct}<button>+</button>
              </div>
            </div>
          </div>
            `;
  });
  rowProducts.innerHTML = str;
}

displayProducts(cartProducts);

function displaySearchedProducts(query) {
  const filteredProducts = cartProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
  );
  displayProducts(filteredProducts);
}

searchInput.addEventListener("keyup", function (e) {
  displaySearchedProducts(e.target.value);
});
