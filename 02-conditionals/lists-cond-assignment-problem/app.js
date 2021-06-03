const app = Vue.createApp({
  data() {
    return {
      inputTask: "",
      tasksArr: [],
      showStat: true,
    };
  },
  computed: {
    buttonText() {
      return this.showStat ? "Hide List" : "Show List";
    }
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
