const catalog = [
  {
    description: "Молоко, сыр, яйцо",
    images: ["../fonts/images/products/img-1.png"],
  },
  {
    description: "Хлеб",
    images: ["../fonts/images/products/img-2.png"],
  },
  {
    description: "Фрукты и овощи",
    images: ["../fonts/images/products/img-3.png"],
  },
  {
    description: "Замороженные продукты",
    images: ["../fonts/images/products/img-4.png"],
  },
  {
    description: "Напитки",
    images: ["../fonts/images/products/img-5.png"],
  },
  {
    description: "Кондитерские изделия",
    images: ["../fonts/images/products/img-6.png"],
  },
  {
    description: "Чай, кофе",
    images: ["../fonts/images/products/img-7.png"],
  },
  {
    description: "Бакалея",
    images: ["../fonts/images/products/img-8.png"],
  },
  {
    description: "Здоровое питание",
    images: ["../fonts/images/products/img-9.png"],
  },
  {
    description: "Зоотовары",
    images: ["../fonts/images/products/img-10.png"],
  },
  {
    description: "Детское питание",
    images: ["../fonts/images/products/img-11.png"],
  },
  {
    description: "Мясо, птица, колбаса",
    images: ["../fonts/images/products/img-12.png"],
  },
  {
    description: "Непродовольственные товары",
    images: ["../fonts/images/products/img-13.png"],
  },
];

const cards = document.querySelector(".first-content");
let str = "";
catalog.map((catalogs) => {
  str += `
<div class="item">
 <img src="${catalogs.images}" alt="1">
 <h1 class="odd">${catalogs.description}</h1>
</div>
`;
});
cards.innerHTML = str;
