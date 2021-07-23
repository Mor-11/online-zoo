const informationTitle = document.querySelectorAll(".container__title");
const details = document.querySelectorAll(".container");
const informationText = document.querySelectorAll(".information__text");
const containerText = document.querySelectorAll(".container__text");
const arrowButton = document.querySelectorAll(".container__arrows ");

informationTitle.forEach((e, i) => {
  e.addEventListener("click", () => {
    if (informationText[i].classList.contains("hidden")) {
      informationText[i].classList.remove("hidden");
      details[i].style.height = "102px";
      containerText[i].style.height = "102px";
      arrowButton[i].style.transform = "rotate(180deg)";
    } else {
      details[i].style.height = "21px";
      setTimeout(() => {
        informationText[i].classList.add("hidden");
      }, 1000);
      containerText[i].style.height = "21px";
      arrowButton[i].style.transform = "rotate(0deg)";
    }
  });
});
arrowButton.forEach((e, i) => {
  e.addEventListener("click", () => {
    if (informationText[i].classList.contains("hidden")) {
      informationText[i].classList.remove("hidden");
      details[i].style.height = "102px";
      containerText[i].style.height = "102px";
      arrowButton[i].style.transform = "rotate(180deg)";
    } else {
      details[i].style.height = "21px";
      setTimeout(() => {
        informationText[i].classList.add("hidden");
      }, 1000);
      containerText[i].style.height = "21px";
      arrowButton[i].style.transform = "rotate(0deg)";
    }
  });
});
