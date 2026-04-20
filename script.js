// Récupération des différents éléments
const passwordInput = document.querySelector("#password");
const passwordLengthInput = document.querySelector("#length");
const uppercaseCheckbox = document.querySelector("#uppercase");
const lowercaseCheckbox = document.querySelector("#lowercase");
const numbersCheckbox = document.querySelector("#numbers");
const specialCheckbox = document.querySelector("#special");
const generatePasswordBtn = document.querySelector("#generate-password__btn");
const copyPasswordBtn = document.querySelector("#copy-password__btn");

// Ecoute de l'événement "click" sur le bouton
generatePasswordBtn.addEventListener("click", () => {
  const length = passwordLengthInput.value;
  const lowercase = lowercaseCheckbox.checked;
  const uppercase = uppercaseCheckbox.checked;
  const numbers = numbersCheckbox.checked;
  const special = specialCheckbox.checked;

  // Condition if permettant de vérifier que la longueur du mot de passe soit bien comprise entre 8 et 20 caractères
  if (length < 8 || length > 20) {
    alert(
      "La longeur du mot de passe doit être comprise entre 8 et 20 caractères"
    );
    return;
  }

  // Si aucun critère n'est choisi
  if (!uppercase && !lowercase && !numbers && !special) {
    alert("Veuillez selectionner au moins un critère !");
    return;
  }

  // Création de la variables generatedPasssword et de la constante specialCharArray
  let generatedPassword = "";
  const specialCharArray = [
    "_",
    "@",
    "%",
    "$",
    "&",
    "%",
    "!",
    ",",
    ".",
    "?",
    ";",
  ];

  // Boucle for qui va parcourir la longueur du mot de passe choisie par l'utilisateur
  for (let i = 0; i < length; i++) {
    let r = Math.random();
    if (r > 0.55 && numbers) {
      // La fonction Math.trunc() retourne la troncature entière d'un nombre en retirant sa partie décimale.
      generatedPassword += Math.trunc(Math.random() * 9);
    } else if (r > 0.4 && uppercase) {
      generatedPassword += String.fromCharCode(
        Math.trunc(Math.random() * 26) + 65
      );
    } else if (lowercase) {
      generatedPassword += String.fromCharCode(
        Math.trunc(Math.random() * 26) + 97
      );
    }
    if (r < Math.random() && special) {
      generatedPassword +=
        specialCharArray[Math.trunc(Math.random() * specialCharArray.length)];
      i++;
    }
  }

  passwordInput.value = generatedPassword;
  // console.log(generatedPassword.length);
});

// Ecoute de l'événement "click" sur le bouton copier
copyPasswordBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordInput.value);
  console.log(passwordInput.value);
  alert("Mot de passe copié dans votre presse-papier !");
});
