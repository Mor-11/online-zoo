const coverElem = document.getElementById("cover");
const formElem = document.getElementById("form-feedback");
const feedbackButton = document.getElementById("feedback");
const sendButton = document.getElementById("send");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const textField = document.getElementById("text-feedback");
const close = document.querySelector(".close");
const form = document.querySelector(".feedback");

const validate = () => {
  if (
    nameField.validity.valid &&
    emailField.validity.valid &&
    textField.validity.valid
  ) {
    sendButton.classList.remove("invalid");
  } else {
    sendButton.classList.add("invalid");
  }
};

const closeFeedback = () => {
  document.body.classList.remove("notScrollable");
  coverElem.classList.add("hidden");
  formElem.classList.add("hidden");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  closeFeedback();
  nameField.value = "";
  emailField.value = "";
  textField.value = "";
  sendButton.classList.add("invalid");
});

feedbackButton.addEventListener("click", () => {
  document.body.classList.add("notScrollable");
  coverElem.classList.remove("hidden");
  formElem.classList.remove("hidden");
});

coverElem.addEventListener("click", () => {
  closeFeedback();
});

close.addEventListener("click", () => {
  closeFeedback();
});

sendButton.addEventListener("click", () => {
  if (sendButton.classList.contains("invalid")) return;
  closeFeedback();
});

nameField.addEventListener("input", () => {
  validate();
});

emailField.addEventListener("input", () => {
  validate();
});

textField.addEventListener("input", () => {
  validate();
});
