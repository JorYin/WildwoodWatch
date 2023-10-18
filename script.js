const themeButton = document.getElementById("dark-mode-btn");

themeButton.addEventListener("click", e =>{
  e.preventDefault();

  document.body.classList.toggle("dark-mode");
});