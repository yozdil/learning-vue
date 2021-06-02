const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      visibility: true,
      inputBG: "",
    };
  },
  computed: {
    comClass() {
      return {
        user1: this.inputClass === "user1",
        user2: this.inputClass === "user2",
        visibile: this.visibility,
        hidden: !this.visibility,
      };
    },
  },
  methods: {
    toggleP() {
      this.visibility = !this.visibility;
    },
  },
});

app.mount("#assignment");
