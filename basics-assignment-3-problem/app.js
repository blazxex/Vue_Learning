const app = Vue.createApp({
  data() {
    return {
      sum: 0,
      result: "",
    };
  },
  methods: {
    add(num) {
      this.sum = this.sum + num;
    },
  },
  watch: {
    sum(value) {
      setTimeout(() => {
        this.sum = 0;
      }, 5000);
    },
  },

  computed: {
    algo() {
      if (this.sum > 37) {
        return "Too much";
      } else if (this.sum < 37) {
        return "Not Yet";
      } else if (this.sum === 37) {
        return this.sum;
      }
      setTimeout(() => {
        this.sum = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
