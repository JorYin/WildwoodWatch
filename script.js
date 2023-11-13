// Html Parts

// Btn
const themeButton = document.getElementById("dark-mode-btn");
const signNowButton = document.getElementById("sign-btn");
const closeModalButton = document.getElementById("close-modal");
const hamMenu = document.getElementById("menu-icon");
const closeHamMenu = document.getElementById("close-icon");

// Input
const petitionInputs = document.getElementById("form-sign");
const signatures = document.getElementById("signatures");
const signName = document.getElementById("inputName");
const signHometown = document.getElementById("inputHometown");
const signEmail = document.getElementById("inputEmail");
const modal = document.getElementById("thanks-modal");
const modalContent = document.getElementById("thanks-modal-content")
const modalImage = document.getElementById("modalImg")
const navBarMobile = document.querySelector(".nav-items-mobile")

// Sections
const revealableContainers = document.querySelectorAll(".revealable")
const darkHero = document.querySelector(".background-container")
const navLinks = document.querySelectorAll('.nav-items-mobile ul li a');

// Counter
const countSig = document.getElementById("count-sig");

// JS variables
let count = 0;
let scaleFactor = 1;


let animation = {
  revealDistance : 150,
  initialOpacity : 0,
  transitionDelay : 0,
  transitionDuration : '2s',
  transitionProperty : 'all',
  transitionTimingFunction : 'ease'
} 

// Events
themeButton.addEventListener("click", e =>{

  darkHero.classList.toggle("dark-mode-background");
  
  document.body.classList.toggle("dark-mode");
  
});

window.addEventListener("scroll", reveal);

closeModalButton.addEventListener("click", e =>{

  modal.style.display = "none";

});

window.addEventListener("resize", e => {
  if (window.innerWidth > 992) {
    hamMenu.style.display = "none";
    closeHamMenu.style.display = "none";
  }
});

window.addEventListener("resize", e => {
  if (window.innerWidth < 992) {
    hamMenu.style.display = "block";
    closeHamMenu.style.display = "none";
  }
});

hamMenu.addEventListener('click', e => {
  
  navBarMobile.classList.add('nav-items-active');
  hamMenu.style.display = "none";
  closeHamMenu.style.display = "block";

});

closeHamMenu.addEventListener('click', e => {
  
  navBarMobile.classList.remove('nav-items-active');
  hamMenu.style.display = "block";
  closeHamMenu.style.display = "none";

});

navLinks.forEach(closeMenuLinks);

// Functions
function formSignatures(person){
  
  if (signatures.children.length >= 7){
    count += 1;
    document.getElementById("petition-count").innerHTML = count;
  } 
  else{
    const newPerson = document.createElement("p");
    newPerson.innerHTML = `🖊️${person.name} from ${person.homeTown} supports this`;
    signatures.insertBefore(newPerson, countSig)
    count += 1;
    document.getElementById("petition-count").innerHTML = count;
  }

};

function reveal() {

  for (let i = 0; i < revealableContainers.length; i++){
    let windowHeight = window.innerHeight;

    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      /* add the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.add("active")
    } else {
      /* remove the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.remove("active")
    }

  }


}

function toggleModal(person){

  modal.style.display = "flex";

  modalContent.textContent = `Thank you, ${person.name} from ${person.homeTown}, for your support!`;

  intervalId = setInterval(scaleImage, 500)

  setTimeout(() => {
    clearInterval(intervalId);
    modal.style.display = "none";
  }, 4000);

}

function scaleImage() {
  scaleFactor = scaleFactor === 1 ? 0.8 : 1

  modalImage.style.transform = `scale(${scaleFactor})`;

}

function closeMenuLinks(links) {
  links.addEventListener("click", e => {
    
    navBarMobile.classList.remove("nav-items-active");
    
    hamMenu.style.display = "block";
    
    closeHamMenu.style.display = "none";

  });
}

// Form validation
const validateForm = () => {

  let containsErrors = false;
  
  let petitionValues = petitionInputs.elements;

  let person = {
    name: petitionInputs[0].value, // accesses and saves value of first input
    homeTown: petitionInputs[1].value,
    email: petitionInputs[2].value
  }

  for (let i = 0; i < petitionValues.length; i++){
    
    if (petitionValues[i].value.length < 2){
      containsErrors = true;
      petitionValues[i].classList.add("error");
    } else{
      petitionValues[i].classList.remove("error");
    }
    
    if (!person.email.includes(".com")){
      containsErrors = true;
      signEmail.classList.add('error');
    } else{
      signEmail.classList.remove('error');
    }
  }
  
  if (!containsErrors){
    formSignatures(person);

    toggleModal(person);
    for (let i = 0; i< petitionValues.length; i++){
      petitionValues[i].value = "";
      }
  }
}

signNowButton.addEventListener("click", validateForm);
