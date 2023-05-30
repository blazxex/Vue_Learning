Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");

// const buttonEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector("ul");

// function addGoal() {
//   const enteredValue = inputEl.value;  //sotre input data
//   const listItemEl = document.createElement("li"); //create li
//   listItemEl.textContent = enteredValue; //make <li>  enteredVlaue </li>
//   listEl.appendChild(listItemEl); //append listItemEL in listEl
//   inputEl.value = ""; //clear input
// }

// buttonEl.addEventListener("click", addGoal);
// inputEl.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     // e.preventDefault();
//     addGoal();
//   }
// });
