const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
      fullname: "",
    };
  },
  computed: {
    // fullname() {
    //   if (this.name !== "") {
    //     return this.name + " " + " Lastname";
    //   }
    // },
  },
  watch: {
    name(value) {
      if (value === "") {
        this.fullname = "";
      } else {
        this.fullname = value + " " + "Lastname";
      }
    },
    // use  same name as data property.
  },
  methods: {
    red(num) {
      if (this.counter > 0) {
        this.counter = this.counter - num;
      }
    },
    add(num) {
      this.counter = this.counter + num;
    },
    setName(event, lst) {
      this.name = event.target.value;
    },
    submitForm(event) {
      alert("Submitted!");
    },
    confirmedInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = "";
    },
    outFullname() {
      if (this.name !== "") {
        return this.name + " " + " Lastname";
      }
    },
  },
});

app.mount("#events");
