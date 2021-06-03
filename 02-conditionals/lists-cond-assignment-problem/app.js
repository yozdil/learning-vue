const app = Vue.createApp({
  data() {
    return {
      inputTask: "",
      tasksArr: [],
      showStat: true,
    };
  },
  methods: {
    addTask() {
      this.tasksArr.push(this.inputTask);
      this.inputTask = "";
    },
    toggleList() {
      this.showStat = !this.showStat;
    },
  },
});

app.mount("#assignment");
