<template>
  <v-app-bar app color="#E7F9FF" white flat class="px-8">
    <router-link to="/">
      <v-btn class="test" text>
        {{ $t("name") }}
        <!-- <v-icon color="#A71210">fas fa-dragon</v-icon> -->
      </v-btn>
    </router-link>
    <v-spacer></v-spacer>

    <router-link :to="`/${$i18n.locale}/about`">
      <v-btn text @click="scroll('about')"
        >{{ $t("nav.about") }}
      </v-btn></router-link
    >
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
a,
li {
  text-decoration: none;
}
</style>
