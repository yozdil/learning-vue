const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  computed: {
    fullname() {
      if (this.name === "") {
        return "";
      } else {
        return `${this.name} Ozdil`;
      }
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num) {
      this.counter = this.counter - num;
    },
    /**
     * JS property if you point an event listener to a function it automatically gets the parameter event
     */
    setName(e, lastName) {
      this.name = e.target.value;
    },
    submitForm() {
      alert("Submitted!");
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
