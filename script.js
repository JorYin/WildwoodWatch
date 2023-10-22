const themeButton = document.getElementById("dark-mode-btn");
const signNowButton = document.getElementById("sign-btn")
const signatures = document.getElementById("signatures")
const signName = document.getElementById("inputName")
const signHometown = document.getElementById("inputHometown")
const signEmail = document.getElementById("inputEmail")

signNowButton.addEventListener("click", e =>{
  e.preventDefault();
  formSignatures();
});

function formSignatures(){
  let name = signName.value;
  let homeTown = signHometown.value;
  let email = signEmail.value;
  

  const newPerson = document.createElement("p");
  newPerson.innerHTML = `🖊️${name} from ${homeTown} supports this`;
  signatures.appendChild(newPerson);

  if (signatures.length >= 6){

  };


};


themeButton.addEventListener("click", e =>{
  e.preventDefault();

  document.body.classList.toggle("dark-mode");
});