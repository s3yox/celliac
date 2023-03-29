const searchOption = document.getElementById("search-option");

searchOption.addEventListener("change", function () {
  const menu = document.querySelector(".menu");
  const categories = document.querySelector(".categories");

  if (searchOption.value === "celiac") {
    menu.style.display = "none";
    categories.style.display = "block";
  } else if (searchOption.value === "all") {
    menu.style.display = "block";
    categories.style.display = "none";
  } else {
    menu.style.display = "block";
    categories.style.display = "block";
  }
});

const searchBox = document.querySelector("#search-box");
const categoryButtons = document.querySelectorAll(".categories button");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.item;
    const dishes = document.querySelectorAll(".dish");

    dishes.forEach((dish) => {
      dish.style.display = "none";

      if (dish.classList.contains(category)) {
        dish.style.display = "block";
      }
    });
  });
});
