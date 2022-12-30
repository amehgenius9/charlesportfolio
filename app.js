let openBtn = document.querySelector(".openBtn");
let closeBtn = document.querySelector(".closeBtn");
let links = document.querySelector(".links");

openBtn.addEventListener("click", function () {
    links.classList.add("show-links")
})

closeBtn.addEventListener("click", function () {
    links.classList.remove("show-links")
})
