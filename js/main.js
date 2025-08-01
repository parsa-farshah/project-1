let btnMenu = document.getElementById("btnMenu");
let subMenu = document.getElementById("subMenu");
let closeBtn = document.getElementById("closeBtn");

btnMenu.addEventListener("click", () => {
  closeBtn.classList.add("show");
  btnMenu.classList.add("hiddenBtnMenu");
  subMenu.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  closeBtn.classList.remove("show");
  btnMenu.classList.remove("hiddenBtnMenu");
  subMenu.classList.remove("show");
});
