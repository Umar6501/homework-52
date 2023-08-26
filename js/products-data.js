const products = [
  {
    id: 1,
    name: "Apple",
    category: "Fruit",
    description:
      "A round fruit with a red, green known for its high nutrient content, or yellow ",
    price: 89,
    rating: 5,
    discount: 0,
    images: [
      "../assets/images/products/1.png",
      "../assets/images/products/2.png",
      "../assets/images/products/3.png",
      "../assets/images/products/4.png",
    ],
  },
  {
    id: 2,
    name: "Banana",
    category: "Fruit",
    description:
      "A long, curved fruit with sweet, creamy white flesh known dear for its high nutrient content..",
    price: 71,
    rating: 5,
    discount: 20,
    images: [
      "../assets/images/products/2.png",
      "../assets/images/products/3.png",
      "../assets/images/products/4.png",
      "../assets/images/products/5.png",
    ],
  },
  {
    id: 3,
    name: "Bread",
    category: "Bakery",
    description:
      "A staple food made from and yeast, baked into a loaf known for its high nutrient content.",
    price: 88,
    rating: 5,
    discount: 20,
    images: [
      "../assets/images/products/3.png",
      "../assets/images/products/4.png",
      "../assets/images/products/5.png",
      "../assets/images/products/6.png",
    ],
  },
  {
    id: 4,
    name: "Broccoli",
    category: "Vegetable",
    description:
      "A green vegetable with a tree-like appearance, known for its high nutrient content.",
    price: 94,
    rating: 4.5,
    discount: 20,
    images: [
      "../assets/images/products/4.png",
      "../assets/images/products/5.png",
      "../assets/images/products/6.png",
      "../assets/images/products/7.png",
    ],
  },
  {
    id: 5,
    name: "Carrot",
    category: "Vegetable",
    description:
      "A root vegetable texture  known for its high nutrient content. and a sweet, earthy flavor.",
    price: 82,
    rating: 5,
    discount: 20,
    images: [
      "../assets/images/products/5.png",
      "../assets/images/products/6.png",
      "../assets/images/products/7.png",
      "../assets/images/products/8.png",
    ],
  },
  {
    id: 6,
    name: "Cheese",
    category: "Dairy",
    description:
      "A dairy product made from milk, with a variety of textures and flavors.",
    price: 91,
    rating: 3.5,
    discount: 50,
    images: [
      "../assets/images/products/6.png",
      "../assets/images/products/7.png",
      "../assets/images/products/8.png",
      "../assets/images/products/9.png",
    ],
  },
  {
    id: 7,
    name: "Chicken",
    category: "Meat",
    description:
      "A type of poultry, often high nutrient content. as a source of protein in meals.",
    price: 68,
    rating: 3.5,
    discount: 20,
    images: [
      "../assets/images/products/7.png",
      "../assets/images/products/8.png",
      "../assets/images/products/9.png",
      "../assets/images/products/10.png",
    ],
  },
  {
    id: 8,
    name: "Chocolate",
    category: "Dessert",
    description:
      "A sweet food made from cacao beans, used in a variety of desserts and confections.",
    price: 61,
    rating: 4.5,
    discount: 20,
    images: [
      "../assets/images/products/8.png",
      "../assets/images/products/9.png",
      "../assets/images/products/10.png",
      "../assets/images/products/11.png",
    ],
  },
  {
    id: 9,
    name: "Coffee",
    category: "Dessert",
    description:
      "A dark, bitter beverage made from roasted coffee beans, typically used as a pick-me-up.",
    price: 98,
    rating: 5,
    discount: 20,
    images: [
      "../assets/images/products/9.png",
      "../assets/images/products/10.png",
      "../assets/images/products/11.png",
      "../assets/images/products/12.png",
    ],
  },
  {
    id: 10,
    name: "Egg",
    category: "Dairy",
    description:
      "A oval-shaped produced by birds, often used as a source of protein in meals.",
    price: 79,
    rating: 4.5,
    discount: 0,
    images: [
      "../assets/images/products/10.png",
      "../assets/images/products/11.png",
      "../assets/images/products/12.png",
      "../assets/images/products/13.png",
    ],
  },
  {
    id: 11,
    name: "Fish",
    category: "Meat",
    description:
      "A type of seafood, known for its omega-3 fatty acids and high protein content.",
    price: 89,
    rating: 3.5,
    discount: 50,
    images: [
      "../assets/images/products/11.png",
      "../assets/images/products/12.png",
      "../assets/images/products/13.png",
      "../assets/images/products/14.png",
    ],
  },
  {
    id: 12,
    name: "Grapes",
    category: "Fruit",
    description:
      "A small, sweet fruit that grows in clusters, often used in wine-making.",
    price: 61,
    rating: 4,
    discount: 20,
    images: [
      "../assets/images/products/12.png",
      "../assets/images/products/13.png",
      "../assets/images/products/14.png",
      "../assets/images/products/15.png",
    ],
  },
  {
    id: 13,
    name: "Hamburger",
    category: "Fast food",
    description:
      "A sandwich made with a patty of ground beef, served on a bun with various toppings.",
    price: 87,
    rating: 5,
    discount: 0,
    images: [
      "../assets/images/products/13.png",
      "../assets/images/products/14.png",
      "../assets/images/products/15.png",
      "../assets/images/products/16.png",
    ],
  },
  {
    id: 14,
    name: "Hot dog",
    category: "Fast food",
    description:
      "A type of sausage served in a long roll, often used as a quick and convenient food.",
    price: 84,
    rating: 4.5,
    discount: 50,
    images: [
      "../assets/images/products/14.png",
      "../assets/images/products/15.png",
      "../assets/images/products/16.png",
      "../assets/images/products/17.png",
    ],
  },
  {
    id: 15,
    name: "Ice cream",
    category: "Dessert",
    description:
      "A frozen dessert made from cream, sugar, and flavorings, available in a variety of flavors.",
    price: 68,
    rating: 4.5,
    discount: 0,
    images: [
      "../assets/images/products/15.png",
      "../assets/images/products/16.png",
      "../assets/images/products/17.png",
      "../assets/images/products/18.png",
    ],
  },
  {
    id: 16,
    name: "Lemon",
    category: "Fruit",
    description:
      "A yellow citrus fruit with a tart, acidic flavor, often used in cooking and baking.",
    price: 74,
    rating: 3.5,
    discount: 0,
    images: [
      "../assets/images/products/16.png",
      "../assets/images/products/17.png",
      "../assets/images/products/18.png",
      "../assets/images/products/19.png",
    ],
  },
  {
    id: 17,
    name: "Eggs",
    category: "Dairy",
    description:
      "Eggs are oval structures produced by female birds and some reptiles.",
    price: 70,
    rating: 4.5,
    discount: 50,
    images: [
      "../assets/images/products/17.png",
      "../assets/images/products/18.png",
      "../assets/images/products/19.png",
      "../assets/images/products/20.png",
    ],
  },
  {
    id: 18,
    name: "Honey",
    category: "Dairy",
    description:
      "Honey is a sweet, sticky liquid made by bees from the nectar of flowers.",
    price: 87,
    rating: 4,
    discount: 0,
    images: [
      "../assets/images/products/18.png",
      "../assets/images/products/19.png",
      "../assets/images/products/20.png",
      "../assets/images/products/21.png",
    ],
  },
  {
    id: 19,
    name: "Ice Cream",
    category: "Dessert",
    description:
      "Ice cream  known for its high nutrient content. made from cream, sugar, and flavorings.",
    price: 83,
    rating: 4.5,
    discount: 0,
    images: [
      "../assets/images/products/19.png",
      "../assets/images/products/20.png",
      "../assets/images/products/21.png",
      "../assets/images/products/22.png",
    ],
  },
];

const cards = document.querySelector(".cards");
let str = "";
products.map((product) => {
  str += `
  <div class="card">
  <div class="card-img">
    <img src="${product.images}" alt="" class="big-img"/>

    <button class="like">
      <img
        src="../fonts/images/articles/Aktsiya-card-like.img"
        alt="icon"
      />
    </button>
  </div>
  <div class="card-content">
    <div class="content1">
      <h2>${product.price}</h2>
    </div>
    <div class="content3">
      <p>${product.description}</p>
      <div class="stars">
        <button>
          <img src="../fonts/images/articles/star.png" alt="icon" />
        </button>
        <button>
          <img src="../fonts/images/articles/star.png" alt="icon" />
        </button>
        <button>
          <img src="../fonts/images/articles/star.png" alt="icon" />
        </button>
        <button>
          <img src="../fonts/images/articles/star.png" alt="icon" />
        </button>
        <button>
          <img src="../fonts/images/articles/star.png" alt="icon" />
        </button>
      </div>
    </div>
    <div class="big-btn">
      <button>В корзину</button>
    </div>
  </div>
</div>
`;
});
cards.innerHTML = str;
