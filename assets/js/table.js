let tableLeft = document.querySelector(".table-left");
let tableRight = document.querySelector(".table-right");
let tableArrowLeft = document.querySelector(
  ".main__exchange__table__container__arrow-left"
);
let tableArrowRight = document.querySelector(
  ".main__exchange__table__container__arrow-right"
);

const changeTable = () => {
  console.log("aaa");
  tableLeft.classList.toggle("hidden");
  tableRight.classList.toggle("hidden");
  tableArrowLeft.classList.toggle("display-none");
  tableArrowRight.classList.toggle("display-none");
};
