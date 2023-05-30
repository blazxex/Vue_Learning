const app = Vue.createApp({
  data() {
    return {
      name: "John",
      age: 20,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT49ZBu9rM8wdiEw2qOXw9h9oZMNCJkBtaOBAExrhuGg&s",
    };
  },
  methods: {
    ageCal() {
      return this.age + 5;
    },
  },
});
app.mount("#assignment");
