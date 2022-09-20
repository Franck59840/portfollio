/
<template>
  <v-container>
    <v-row class="mt-8">
      <v-col class="picture" cols="12" sm="6" md="4">
        <v-img :src="require('../assets/about.svg')" contain />
      </v-col>
      <v-col>
        <h2>{{ $t("aboutme.about") }}</h2>
        <p>{{ $t("aboutme.about1") }}</p>
        <p>{{ $t("aboutme.dev") }}</p>
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
</style>
