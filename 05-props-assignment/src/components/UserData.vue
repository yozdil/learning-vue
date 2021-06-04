<template>
  <section>
    <form @submit.prevent="submitData">
      <input v-model="enteredUserName" type="text" placeholder="Your Name" />
      <input v-model="enteredUserAge" type="text" placeholder="Your Age" />
      <button>Set User Data</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["set-data"],
  data() {
    return {
      enteredUserName: "",
      enteredUserAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("set-data", this.enteredUserName, this.enteredUserAge);
    },
  },
};
</script>
