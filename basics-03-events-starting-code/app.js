const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
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
      this.name = `${e.target.value} ${lastName}`;
    },
  },
});

app.mount("#events");
