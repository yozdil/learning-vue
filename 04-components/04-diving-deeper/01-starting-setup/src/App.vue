<template>
  <div>
    <!-- <the-header></the-header>  ----- We can also use the component this way  -->
    <TheHeader />
    <BadgeList />
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
  </div>
</template>

<script>
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import TheHeader from "./components/TheHeader.vue";

export default {
  components: {
    BadgeList,
    UserInfo,
    TheHeader,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
