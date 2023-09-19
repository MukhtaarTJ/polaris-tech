let btn = document.getElementById("check");
let menu = document.getElementById("menu");
let menuVisible = false;

btn.addEventListener("click", function () {
  if (!menuVisible) {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
  menuVisible = !menuVisible;
});
