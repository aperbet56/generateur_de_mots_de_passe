// Récupération des différents éléments
const passwordInput = document.querySelector("#password");
const passwordLengthValue = document.querySelector("#password-length__value");
const passwordLengthInput = document.querySelector("#password-length__input");
const uppercaseCheckbox = document.querySelector("#uppercase");
const lowercaseCheckbox = document.querySelector("#lowercase");
const numbersCheckbox = document.querySelector("#numbers");
const specialCheckbox = document.querySelector("#special");
const generatePasswordBtn = document.querySelector("#generate-password__btn");
const copyPasswordBtn = document.querySelector("#copy-password__btn");

// Ecoute de l'événement "input" sur l'input de type range
passwordLengthInput.addEventListener("input", (e) => {
  passwordLengthValue.textContent = e.target.value;
});

// Ecoute de l'événement "click" sur le bouton
generatePasswordBtn.addEventListener("click", () => {
  const length = passwordLengthInput.value;
  const lowercase = lowercaseCheckbox.checked;
  const uppercase = uppercaseCheckbox.checked;
  const numbers = numbersCheckbox.checked;
  const special = specialCheckbox.checked;

  // Si aucun critère n'est choisi
  if (!uppercase && !lowercase && !numbers && !special) {
    alert("Veuillez selectionner au moins un critère !");
    return;
  }

  // Création des variables passsword et specialCharArray
  let password = "";
  let specialCharArray = ["_", "@", "%", "$", "&", "%", "@", "_"];

  // Boucle for qui va parcourir la longueur du mot de passe choisie par l'utilisateur
  for (let i = 0; i < length; i++) {
    let r = Math.random();
    if (r > 0.55 && numbers) {
      // La fonction Math.trunc() retourne la troncature entière d'un nombre en retirant sa partie décimale.
      password += Math.trunc(Math.random() * 9);
    } else if (r > 0.4 && uppercase) {
      password += String.fromCharCode(Math.trunc(Math.random() * 26) + 65);
    } else if (lowercase) {
      password += String.fromCharCode(Math.trunc(Math.random() * 26) + 97);
    }
    if (r < Math.random() && special) {
      password +=
        specialCharArray[Math.trunc(Math.random() * specialCharArray.length)];
      i++;
    }
  }

  passwordInput.value = password;
});

// Ecoute de l'événement "click" sur le bouton copier
copyPasswordBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordInput.value);
  console.log(passwordInput.value);
  alert("Mot de passe copié dans votre presse-papier !");
});
