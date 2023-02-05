<template>
  <v-app-bar app color="#E7F9FF" flat class="px-8 navbar">
    <v-toolbar-title class="ml-0"
      ><router-link to="/">
        <v-btn text class="hidden-sm-and-down">
          {{ $t("describe.name") }}
        </v-btn>
      </router-link></v-toolbar-title
    >
    <v-spacer></v-spacer>
    <template v-if="$vuetify.breakpoint.smAndDown">
      <v-menu>
        <template v-slot:activator="{ on }">
          <v-btn color="#E7F9FF" v-on="on" class="no-border-btn">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <router-link to="/">
            <v-btn text>{{ $t("describe.name") }}</v-btn>
          </router-link>
          <router-link :to="`/${$i18n.locale}/project`">
            <v-list-item @click="scroll('project')">
              <v-list-item-title>{{ $t("nav.projects") }}</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link :to="`/${$i18n.locale}/contact`">
            <v-list-item @click="scroll('contact')">
              <v-list-item-title>{{ $t("nav.contact") }}</v-list-item-title>
            </v-list-item>
          </router-link>
          <LanguageSwitcher />
        </v-list>
      </v-menu>
    </template>
    <template v-else>
      <router-link :to="`/${$i18n.locale}/project`">
        <v-list-item @click="scroll('project')">
          <v-list-item-title>{{ $t("nav.projects") }}</v-list-item-title>
        </v-list-item>
      </router-link>
      <router-link :to="`/${$i18n.locale}/contact`">
        <v-list-item @click="scroll('contact')">
          <v-list-item-title>{{ $t("nav.contact") }}</v-list-item-title>
        </v-list-item>
      </router-link>

      <LanguageSwitcher />
    </template>
  </v-app-bar>
</template>

<script>
import LanguageSwitcher from "../components/LanguageSwitcher.vue";
export default {
  data() {
    return {
      items: [{ title: "Home" }, { title: "About" }, { title: "Contact" }],
    };
  },
  methods: {
    downloadCV() {
      const link = document.createElement("a");
      link.href = "https://uptobox.com/kcbaqix52md7";
      link.setAttribute("download", "CV.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
    },
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
  background-color: #e7f9ff;
}

a,
li {
  text-decoration: none;
}

.no-border-btn {
  border: none !important;
  box-shadow: none !important;
}
</style>
