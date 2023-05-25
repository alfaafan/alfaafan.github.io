const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const downIcon = document.getElementById("down-icon");

function toggleIcon() {
  downIcon.classList.toggle("fa-angle-down");
  downIcon.classList.toggle("fa-angle-up");
}

downIcon.addEventListener("click", toggleIcon);

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
