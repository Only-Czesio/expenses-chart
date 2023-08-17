const tableOfDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
const columns = document.querySelectorAll("[data-square");
const summary = document.querySelector("#inTotal");

const d = new Date();
let day = d.getDay();

let sum = 0;

const colorCurrentDay = () => {
  console.log("I'm changing color of current day");
    for (let i = 0; i < columns.length; i++) {
        if (columns[i].className === tableOfDays[day]) {
        columns[i].classList.add("currentDayClass");
      }
    }
};
const readData = () => {
  const requests = [0, 1, 2, 3, 4, 5, 6].map((i) => {
    return fetch("../data/data.json")
      .then((response) => response.json())
      .then((data) => {
        sum += data[i].amount;
        document
          .querySelector(`#${tableOfDays[i]}`)
          .setAttribute("style", `--size: calc( ${data[i].amount} / 60 );`);
      });
  });
  return Promise.all(requests);
};
const returnSum = () => {
  summary.innerHTML = `${sum}$`;
}
colorCurrentDay();
readData().then(returnSum);
