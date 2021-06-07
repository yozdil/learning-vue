<template>
  <h3>
    {{ counter }}
  </h3>
</template>

<script>
export default {
  computed: {
    addOne() {
      return this.$store.getters.finalCounter;
    }
  }
};
</script>
