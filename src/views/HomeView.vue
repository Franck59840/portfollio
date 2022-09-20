<template>
  <v-container ma-0 pa-0>
    <div>
      <ProfilMe />
      <AboutMe />
      <LabelTech class="label" />
    </div>
  </v-container>
</template>
<script>
import ProfilMe from "@/components/ProfilMe.vue";
import AboutMe from "@/components/AboutMe.vue";
import LabelTech from "../components/LabelTech.vue";
export default { components: { ProfilMe, AboutMe, LabelTech } };
</script>

<style>
.label {
  margin-top: 100px;
}
</style>
