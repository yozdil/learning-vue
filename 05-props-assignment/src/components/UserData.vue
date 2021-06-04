<template>
  <div>
    <label>Name:</label>
    <input v-model="userName" type="text" />
  </div>
  <div>
    <label>Age:</label>
    <input v-model="userAge" type="text" />
  </div>
</template>

<script>
export default {
  emits: ["add-user"],
  data() {
    return {
      userName: "",
      userAge: "",
    };
  },
};
</script>
