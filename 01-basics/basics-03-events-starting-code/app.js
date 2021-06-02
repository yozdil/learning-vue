const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullname: "",
    };
  },
  watch: {
    // name(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   }
    //   this.fullname = value + " " + this.lastName;
    // },
    // lastName() {
    //   if (value === "") {
    //     this.fullname = "";
    //   }
    //   this.fullname = this.name + " " + value;
    // },
    /**
     * This is where watchers shine!!
     */
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
  },
  computed: {
    fullname() {
      if (this.name === "" || this.lastName === "") {
        return "";
      } else {
        return `${this.name} ${this.lastName}`;
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
    setName(e) {
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
