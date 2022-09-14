<template>
  <v-app-bar app color="#D6EAF8" white flat class="px-8">
    <v-btn text>
      Depoorter Franck
      <!-- <v-icon color="#A71210">fas fa-dragon</v-icon> -->
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn text @click="scroll('about')">A propos de moi</v-btn>
    <v-btn text @click="scroll('project')">Projets</v-btn>
    <v-btn text @click="scroll('contact')">Contact</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style></style>
