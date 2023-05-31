const app = Vue.createApp({
  data() {
    return {
      detailVisible: false,
      friends: [
        {
          id: "manuel",
          name: "Manuel Loren",
          phone: "0892738475",
          email: "asdas2gmail.com",
        },
        {
          id: "ABCD",
          name: "ABCD DDEF",
          phone: "09830478562",
          email: "sdasdsad@gmail.com",
        },
      ],
    };
  },
  methods: {
    toggleDetail() {
      this.detailVisible = !this.detailVisible;
    },
  },
});
app.mount("#app");
