<template>
  <v-app>
    <NavBar class="nav" />
    <v-main>
      <router-view />
    </v-main>
    <FooTer />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooTer from "./components/FooTer.vue";
export default {
  name: "App",
  data: () => ({}),
  components: { NavBar, FooTer },
};
</script>
<style scoped>
.nav {
  z-index: 15;
}
</style>
