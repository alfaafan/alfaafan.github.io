const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const menuButtonIcon = document.getElementById("menu-icon");

function toggleIcon() {
  menuButtonIcon.classList.toggle("fa-angle-down");
  menuButtonIcon.classList.toggle("fa-angle-up");
}

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  toggleIcon();
});
