<template>
  <v-app>
    <v-container fluid>
      <p>{{ $t("message") }}</p>
      <v-row>
        <v-col cols="6"></v-col>
        <v-img
          :src="require('../assets/profil.jpg')"
          contain
          max-height="500"
        />
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {};
</script>

<style></style>
