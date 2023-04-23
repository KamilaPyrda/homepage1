
let przycisk = document.querySelector(".przycisk");
let BoiszSie = document.querySelector(".BoiszSie");
let Zdjecie = document.querySelector(".Zdjecie");
let body = document.querySelector(".body");

przycisk.addEventListener("click", () => {

    body.classList.toggle("NoweTlo");

});

BoiszSie.addEventListener("click", () => {

    Zdjecie.remove();

});

