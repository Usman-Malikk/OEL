const menu = [
  {
    id: 1,
    title: "Wedding",
    category: "Wedding",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis qui est consequuntur doloremque! Dolores eos, non accusantium optio ipsa atque aliquid voluptatum voluptatem. Porro laudantium mollitia maiores eum aut possimus. `,
  },
  {
    id: 2,
    title: "Wedding",
    category: "Wedding",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis qui est consequuntur doloremque! Dolores eos, non accusantium optio ipsa atque aliquid voluptatum voluptatem. Porro laudantium mollitia maiores eum aut possimus. `,
  },
  {
    id: 3,
    title: "Party",
    category: "Party",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis qui est consequuntur doloremque! Dolores eos, non accusantium optio ipsa atque aliquid voluptatum voluptatem. Porro laudantium mollitia maiores eum aut possimus..`,
  },
  {
    id: 4,
    title: "Wedding",
    category: "Wedding",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis qui est consequuntur doloremque! Dolores eos, non accusantium optio ipsa atque aliquid voluptatum voluptatem. Porro laudantium mollitia maiores eum aut possimus., `,
  },
  {
    id: 5,
    title: "Others",
    category: "Others",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis qui est consequuntur doloremque! Dolores eos, non accusantium optio ipsa atque aliquid voluptatum voluptatem. Porro laudantium mollitia maiores eum aut possimus. pop-up `,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}