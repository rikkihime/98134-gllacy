var link = document.querySelector(".contacts-full__btn");
var popup = document.querySelector(".modal-writeus");
var close = document.querySelector(".modal-writeus__close");
var overlay = document.querySelector(".modal-overlay");

var yourName = popup.querySelector("[name=modal-writeus__name]");
var yourEmail = popup.querySelector("[name=modal-writeus__email]");
var textarea = popup.querySelector("[name=modal-writeus__text]");
var form = popup.querySelector("form");

var storageName = localStorage.getItem("yourName");
var storageEmail = localStorage.getItem("yourEmail");








link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-writeus__show");
  overlay.classList.add("modal-overlay__show");
  
  if (storageName && storageEmail) {
    yourName.value = storageName;
    yourEmail.value = storageEmail;
    textarea.focus();
  } else {
    yourName.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-writeus__show");
  overlay.classList.remove("modal-overlay__show");
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-writeus__show");
  overlay.classList.remove("modal-overlay__show");
  popup.classList.remove("modal-writeus__error");
});

form.addEventListener("submit", function(event) {
  if (!yourName.value || !yourEmail.value || !textarea.value) {
    event.preventDefault();
    popup.classList.add("modal-writeus__error");
  } else {
    localStorage.setItem("yourName", yourName.value);
    localStorage.setItem("yourEmail", yourEmail.value);
    console.log("ok");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-writeus__show") && overlay.classList.contains("modal-overlay__show")) {
      popup.classList.remove("modal-writeus__show");
      overlay.classList.remove("modal-overlay__show");
    }
  }
});