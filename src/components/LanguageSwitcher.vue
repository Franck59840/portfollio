<template>
  <v-menu offset-y class="list">
    <template v-slot:activator="{ on, attrs }">
      <v-btn plain width="10px" height="20px " v-bind="attrs" v-on="on">
        <span>{{ $i18n.locale.toUpperCase() }}</span>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        @click.prevent="setLocale('en')"
        ref="language"
        class="pa-0 ma-0"
      >
        <!-- <span class="ml-2">EN</span> -->
        <img
          style="width: 50px"
          src="../assets/flag_en.svg"
          alt="english flag"
        />
      </v-list-item>
      <v-list-item @click.prevent="setLocale('fr')" ref="language">
        <img
          style="width: 50px"
          src="../assets/flag_fr.svg"
          alt="french flag"
        />
        <!-- <span class="ml-2">FR</span> -->
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script>
import { mixin as clickaway } from "vue-clickaway";
export default {
  mixins: [clickaway],
  data() {
    return {
      isVisible: false,
      focusedIndex: 0,
    };
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale },
      });
    },
  },
};
</script>
<style scoped>
.v-list-item {
  min-height: 30px;
  padding-top: 10px;
  padding-right: 0;
  padding-left: 0;
  margin-left: 2px;
  margin-right: 2px;
  justify-content: center;
}
.v-btn {
  border: solid 1px black;
}
</style>
