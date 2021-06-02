const app = Vue.createApp({
  data() {
    return {
      output: "",
      outputTwo: "",
    };
  },
  methods: {
    buttonClick() {
      alert("Button Pressed!");
    },
    changeOutput(e) {
      this.output = e.target.value;
    },
    changeOutputTwo(e) {
      this.outputTwo = e.target.value;
    },
  },
});

app.mount("#assignment");
