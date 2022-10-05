/
<template>
  <v-container>
    <v-row class="mt-8">
      <v-col class="picture" cols="12" sm="6" md="4">
        <v-img :src="require('../assets/about.svg')" contain />
      </v-col>
      <v-col class="col2">
        <h2 class="mb-4">{{ $t("aboutme.about") }}</h2>
        <p class="text-justify test">{{ $t("aboutme.about1") }}</p>
        <h2 class="colorT mt-4">{{ $t("aboutme.webDev") }}</h2>
        <p class="text-justify test">{{ $t("aboutme.dev") }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.picture {
  margin-left: 100px;
}
.colorT {
  color: #677494;
}
.col2 {
  margin-top: 80px;
}
.test {
  width: 750px;
}
</style>
