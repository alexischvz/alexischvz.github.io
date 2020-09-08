import menuHamburger from "./module/menu_hamburger.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    menuHamburger(".btnmenu", ".menu-nav", ".menu-nav a");
})