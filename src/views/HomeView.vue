<template>
  <v-container ma-0 pa-0>
    <div>
      <ProfilMe />
      <AboutMe />
      <LabelTech class="label" />
      <SkillsMe />
      <Projects />
    </div>
  </v-container>
</template>
<script>
import ProfilMe from "@/components/ProfilMe.vue";
import AboutMe from "@/components/AboutMe.vue";
import LabelTech from "../components/LabelTech.vue";
import SkillsMe from "../components/SkillsMe.vue";
import Projects from "../components/ProjectsMe.vue";
export default {
  components: { ProfilMe, AboutMe, LabelTech, SkillsMe, Projects },
};
</script>

<style>
.label {
  margin-top: 100px;
}
</style>
