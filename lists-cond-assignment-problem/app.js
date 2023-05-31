const app = Vue.createApp({
  data() {
    return {
      ipt: "",
      tasks: [],
      taskListIsVisible: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.ipt);
      this.ipt = "";
    },
    toggleTaskList() {
      this.taskListIsVisible = !this.taskListIsVisible;
    },
  },
});

app.mount("#assignment");
