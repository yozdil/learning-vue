<template>
  <h3>
    {{ finalCounter }}
  </h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // addOne() {
    //   return this.$store.getters.finalCounter;
    // }
    ...mapGetters(['finalCounter'])
  }
};
</script>
