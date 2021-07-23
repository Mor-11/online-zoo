const cover = document.getElementById("popup_cover");
const popupElem = document.getElementById("popup_animal");
const formMony = document.getElementById("popup_content");

const popupButton = document.getElementById("fotten_button");
const nextButton = document.getElementById("next");
const donateButton = document.getElementById("donet");

const closePopup = document.querySelector(".close_popup");
const animalElem = document.getElementById("content_animal");
const cardElem = document.getElementById("content_card");

const text = document.getElementById("your-text");
const amountField = document.getElementById("amount");
const cardField = document.querySelector(".card-number");
const mmField = document.querySelector(".mm");
const yyField = document.querySelector(".yy");
const nameCardField = document.querySelector(".card-name");
const cvcField = document.querySelector(".card-cvc");

const closedPopup = () => {
  document.body.classList.remove("notScrollable");
  cover.classList.add("hidden");
  popupElem.classList.add("hidden");
};

formMony.addEventListener("submit", (e) => {
  e.preventDefault();
  closedPopup();
  animalElem.classList.remove("hidden");
  cardElem.classList.add("hidden");
  text.value = "";
  amountField.value = "";
  cardField.value = "";
  mmField.value = "";
  yyField.value = "";
  nameCardField.value = "";
  cvcField.value = "";
});

popupButton.addEventListener("click", () => {
  document.body.classList.add("notScrollable");
  cover.classList.remove("hidden");
  popupElem.classList.remove("hidden");
});

cover.addEventListener("click", () => {
  closedPopup();
});

closePopup.addEventListener("click", () => {
  closedPopup();
});

nextButton.addEventListener("click", () => {
  if (amountField.value > 0) {
    animalElem.classList.add("hidden");
    cardElem.classList.remove("hidden");
  } else {
    amountField.classList.add("errow");
  }
});
