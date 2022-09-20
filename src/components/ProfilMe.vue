<template>
  <v-container ma-0 pa-0 class="d-flex justify-center diagonal-box">
    <v-row>
      <v-col class="d-flex justify-center">
        <v-img class="profil" :src="require('../assets/profil.jpg')" contain />
      </v-col>
      <v-col class="d-flex align-center">
        <ul>
          <li>{{ $t("describe.name") }}</li>
          <li>{{ $t("describe.profil") }}</li>
          <li>{{ $t("describe.mail") }}</li>
          <li>{{ $t("describe.mobile") }}</li>
          <li>{{ $t("describe.adress") }}</li>
        </ul>
        <div></div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {};
</script>

<style>
.profil {
  max-width: 300px;
  max-height: 300px;
  z-index: 10;
  -moz-border-radius: 200px;
  -webkit-border-radius: 200px;
  border-radius: 200px;
  box-shadow: 0 0 0 15px #a5b7e0, 0 0 0 25px #e7f9ff, 0 0 0 9px #fff,
    0 0 0 10px #fff, 0 0 0 20px #e7f9ff, 0 0 0 20px #e7f9ff;
}
.diagonal-box {
  margin: 0;
  background-image: linear-gradient(45deg, #a5b7e0, #e7f9ff);
}

.container {
  max-width: initial;
  max-height: 300px;
}
li {
  text-decoration: none;
}
</style>
