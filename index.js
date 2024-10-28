let dropdownMenu = document.querySelectorAll(".dropdown-menu");
let dropdownBtn = document.querySelectorAll(".dropdown-btn");


dropdownBtn.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.querySelector(".dropdown-menu").classList.add("show");
  });
  item.addEventListener("mouseleave", () => {
    item.querySelector(".dropdown-menu").classList.remove("show");
  });
});
