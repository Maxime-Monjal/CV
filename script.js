const nav = document.querySelector(".menuBurger");
const btn = document.querySelector(".btn");


btn.addEventListener("click", function (event) {
    nav.classList.toggle("isOpen");
    btn.classList.toggle("btnCross");
});




