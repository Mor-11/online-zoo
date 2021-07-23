const carouselList = document.querySelector(".animal__container");
const carouselItems = document.querySelectorAll(".animal");
const elems = Array.from(carouselItems);

carouselList.addEventListener("click", function (event) {
  const newActive = event.target;
  const isItem = newActive.closest(".animal");

  if (!isItem || newActive.classList.contains("animal_active")) {
    return;
  }
  update(newActive);
});

const update = function (newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);

  current.classList.remove("animal_active");

  [current, prev, next, first, last].forEach((item) => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos);
  });
};

const getPos = function (current, active) {
  const addition = current - active;

  if (Math.abs(current - active) > 2) {
    if (Number(current) < 0 && Number(active) === 2) {
      return Number(current) + 3;
    }

    if (Number(current) > 0 && Number(active) === -2) {
      return Number(current) - 3;
    }
    return -current;
  }
  return addition;
};
