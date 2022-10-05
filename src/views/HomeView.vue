<template>
  <v-container>
    <v-flex class="justify-center">
      <ProfilMe />
      <AboutMe />
      <LabelTech class="label" />
      <SkillsMe />
    </v-flex>
  </v-container>
</template>
<script>
import ProfilMe from "@/components/ProfilMe.vue";
import AboutMe from "@/components/AboutMe.vue";
import LabelTech from "../components/LabelTech.vue";
import SkillsMe from "../components/SkillsMe.vue";
export default { components: { ProfilMe, AboutMe, LabelTech, SkillsMe } };
</script>

<style>
.label {
  margin-top: 100px;
}
</style>
