<template>
  <div>
    <button @click="login" v-if="!userIsAuthenticated">Login</button>
    <button @click="logout" v-else-if="userIsAuthenticated">Logout</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['userIsAuthenticated'])
  },
  methods: {
    ...mapActions(['login', 'logout'])
  }
};
</script>