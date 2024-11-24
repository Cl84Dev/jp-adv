const verticalMenu = document.querySelector(".hamburger-menu");

const menuBtn = document.querySelector(".btn-menu");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    verticalMenu.classList.toggle("active");
  });

  verticalMenu.addEventListener("click", () => {
    verticalMenu.classList.remove("active");
  });
}
