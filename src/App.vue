<template>
  <v-app>
    <NavBar />
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
  data: () => ({
    //
  }),
  components: { NavBar, FooTer },
};
</script>
<style scoped></style>
