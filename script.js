// Html Parts

// Btn
const themeButton = document.getElementById("dark-mode-btn");
const signNowButton = document.getElementById("sign-btn");

// Input
const petitionInputs = document.getElementById("form-sign");
const signatures = document.getElementById("signatures");
const signName = document.getElementById("inputName");
const signHometown = document.getElementById("inputHometown");
const signEmail = document.getElementById("inputEmail");

// Counter
const countSig = document.getElementById("count-sig");

// JS variables
let count = 0;

// Events
themeButton.addEventListener("click", e =>{
  e.preventDefault();

  document.body.classList.toggle("dark-mode");
});


// Functions
function formSignatures(){
  let name = signName.value;
  let homeTown = signHometown.value;
  
  if (signatures.children.length >= 7){
    count += 1;
    document.getElementById("petition-count").innerHTML = count;
  } 
  else{
    const newPerson = document.createElement("p");
    newPerson.innerHTML = `🖊️${name} from ${homeTown} supports this`;
    signatures.insertBefore(newPerson, countSig)
    count += 1;
    document.getElementById("petition-count").innerHTML = count;
  }

};

// TODO: Complete validation form

const validateForm = () => {

  let containsErrors = false;
  var petitionValues = petitionInputs.elements;

  for (let i = 0; i < petitionValues.length; i++){
    
    if (petitionValues[i].value.length < 2){
      containsErrors = true;
      petitionValues[i].classList.add("error");
    } else{
      petitionValues[i].classList.remove("error");
    }
    
    if (!signEmail.value.includes(".com")){
      containsErrors = true;
      signEmail.classList.add('error');
    } else{
      signEmail.classList.remove('error');
    }
  }
  
  if (containsErrors == false){
    formSignatures();
    for (let i = 0; i< petitionValues.length; i++){
      petitionValues[i].value = "";
      }
  }
}

signNowButton.addEventListener("click", validateForm);