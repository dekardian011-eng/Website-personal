// Toggle Menu Mobile
const menuToggle = document.querySelector("#menu-toggle");
const navbarNav = document.querySelector(".navbar-nav");

// Ketika tombol menu ditekan
menuToggle.addEventListener("click", function () {
  navbarNav.classList.toggle("active");
  feather.replace(); // update icon jika berubah
});

// Tutup navbar ketika klik di luar menu
document.addEventListener("click", function (e) {
  if (!menuToggle.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Tutup menu setelah klik link di dalam navbar
const navLinks = document.querySelectorAll(".navbar-nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarNav.classList.remove("active");
  });
});