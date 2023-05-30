const app = Vue.createApp({
  data() {
    return {
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    alt() {
      alert("ALARMMMMM");
    },
    setName(event) {
      this.name = event.target.value;
    },
    conName() {
      this.confirmedName = this.name;
    },
  },
});
app.mount("#assignment");
