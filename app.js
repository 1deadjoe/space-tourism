// when someone clicks the hamburger menu button, either close the menu if open, or open if closed
const menuToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.getElementById("primary-navigation");

menuToggle.addEventListener("click", function () {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    // to toggle display of primary navigation
    nav.setAttribute("data-visible", true);
    //   to toggle between hamburger and close icon
    menuToggle.setAttribute("aria-expanded", true);
  } else {
    // to toggle display of primary navigation
    nav.setAttribute("data-visible", false);
    //   to toggle between hamburger and close icon
    menuToggle.setAttribute("aria-expanded", false);
  }
});
