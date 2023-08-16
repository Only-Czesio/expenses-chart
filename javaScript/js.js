const tableOfDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const curr = document.querySelector(".currentDay");
const columns = document.querySelectorAll("[data-square");
const sun = document.querySelector("#Sunday");
const d = new Date();
let day = d.getDay();
console.log(day);

const addDate = () => {
  console.log("Something is happening");
  curr.innerHTML = tableOfDays[day];
};
const colorCurrentDay = () => {
  console.log("I'm changing color of current day");
    for (let i = 0; i < columns.length; i++) {
        if (columns[i].className === tableOfDays[day]) {
        columns[i].classList.add("currentDayClass");
      }
    }
};
const readData = () => {
    fetch("../data/data.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            sun.setAttribute("style",  "--size: calc( 5 / 100 );")
        });
    }
    .catch((error) => {
      console.error("error reading data.json",error);
    });
readData();
colorCurrentDay();
addDate();
