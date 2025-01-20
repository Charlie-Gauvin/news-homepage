//* INITIALIZATION DOCUMENT LOAD
document.addEventListener("DOMContentLoaded", () => {
  //* SELECT ELEMENTS
  const menuButton = document.getElementById("menuButton");
  const menuIcon = document.getElementById("menuIcon");
  const navBar = document.getElementById("navBar");
  const overlay = document.getElementById("overlay");

  //* HANDLE MENU BUTTON CLICK
  menuButton.addEventListener("click", () => {
    // TOGGLE MENU ICON //
    if (menuIcon.src.includes("icon-menu.svg")) {
      // Switch to the close icon and open menu //
      menuIcon.src = "./assets/images/icon-menu-close.svg";
      navBar.classList.add("open");
      menuButton.classList.add("open");
      overlay.classList.add("open");
    } else {
      // Reverse the close icon and close the menu //
      menuIcon.src = "./assets/images/icon-menu.svg";
      navBar.classList.remove("open");
      menuButton.classList.remove("open");
      overlay.classList.remove("open");
    }
  });
});
