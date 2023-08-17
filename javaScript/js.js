const tableOfDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const columns = document.querySelectorAll("[data-square");
const mon = document.querySelector("#Monday");
const tue = document.querySelector("#Tuesday");
const wed = document.querySelector("#Wednesday");
const thu = document.querySelector("#Thursday");
const fri = document.querySelector("#Friday");
const sat = document.querySelector("#Saturday");
const sun = document.querySelector("#Sunday");

const d = new Date();
let day = d.getDay();

const colorCurrentDay = () => {
  console.log("I'm changing color of current day");
    for (let i = 0; i < columns.length; i++) {
        if (columns[i].className === tableOfDays[day]) {
        columns[i].classList.add("currentDayClass");
      }
    }
};
const readData = () => {
  try {
    fetch("../data/data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].amount);
        mon.setAttribute("style", `--size: calc( ${data[0].amount} / 60 );`);
      });
  } catch (error) {
    console.error("error reading data.json", error);
  }
  try {
    fetch("../data/data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data[1].amount);
        tue.setAttribute("style", `--size: calc( ${data[1].amount} / 60 );`);
      });
  } catch (error) {
    console.error("error reading data.json", error);
  }
  try {
    fetch("../data/data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data[2].amount);
        wed.setAttribute("style", `--size: calc( ${data[2].amount} / 60 );`);
      });
  } catch (error) {
    console.error("error reading data.json", error);
  }
  try {
    fetch("../data/data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data[3].amount);
        thu.setAttribute("style", `--size: calc( ${data[3].amount} / 60 );`);
      });
  } catch (error) {
    console.error("error reading data.json", error);
  }
  try {
    fetch("../data/data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data[4].amount);
        fri.setAttribute("style", `--size: calc( ${data[4].amount} / 60 );`);
      });
  } catch (error) {
    console.error("error reading data.json", error);
  }
  try {
    fetch("../data/data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data[5].amount);
        sat.setAttribute("style", `--size: calc( ${data[5].amount} / 60 );`);
      });
  } catch (error) {
    console.error("error reading data.json", error);
  }
  try {
    fetch("../data/data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data[6].amount);
        sun.setAttribute("style", `--size: calc( ${data[6].amount} / 60 );`);
      });
  } catch (error) {
    console.error("error reading data.json", error);
  }
}
readData();
colorCurrentDay();
