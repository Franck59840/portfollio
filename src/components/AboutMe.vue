<template>
  <v-container>
    <v-row class="mt-8">
      <v-col v-if="!isMobile" class="picture" cols="12" sm="6" md="4">
        <v-img :src="require('../assets/about.svg')" contain />
      </v-col>
      <v-col class="col3">
        <h2 class="mb-4" :class="{ 'text-center': isMobile1 }">
          {{ $t("aboutme.about") }}
        </h2>
        <p class="text-justify px-8">{{ $t("aboutme.about1") }}</p>
        <h2 class="colorT mt-4 mb-4" :class="{ 'text-center': isMobile1 }">
          {{ $t("aboutme.webDev") }}
        </h2>
        <p class="text-justify px-8">{{ $t("aboutme.dev") }}</p>
      </v-col>
      <v-col v-if="isMobile" class="picture" cols="12">
        <v-img :src="require('../assets/about.svg')" contain />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
    };
  },
  computed: {
    isMobile1() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
  mounted() {
    this.isMobile = window.innerWidth <= 350;
  },
};
</script>

<style>
.colorT {
  color: #677494;
}
.col3 {
  margin-top: 80px;
}
</style>
