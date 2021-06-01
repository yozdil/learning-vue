const app = Vue.createApp({
  data() {
    const myAge = 29;
    return {
      myName: "Yam",
      myAge: myAge,
      myAgeInFiveYears: myAge + 5,
      myFaveNum: this.faveNum(),
      imgURL:
        "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg",
    };
  },
  methods: {
    faveNum() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
