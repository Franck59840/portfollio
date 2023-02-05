<template>
  <v-app-bar app color="#E7F9FF" white flat class="px-8 navbar">
    <router-link to="/">
      <v-btn text>
        {{ $t("describe.name") }}
      </v-btn>
    </router-link>
    <v-spacer></v-spacer>
    <router-link :to="`/${$i18n.locale}/project`">
      <v-btn text @click="scroll('project')">{{ $t("nav.projects") }}</v-btn>
    </router-link>
    <router-link :to="`/${$i18n.locale}/contact`">
      <v-btn text @click="scroll('contact')">{{ $t("nav.contact") }}</v-btn>
    </router-link>
    <LanguageSwitcher />
  </v-app-bar>
</template>

<script>
import LanguageSwitcher from "../components/LanguageSwitcher.vue";
export default {
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
  components: { LanguageSwitcher },
};
</script>

<style>
.navbar {
  width: 100w;
}

a,
li {
  text-decoration: none;
}
</style>
