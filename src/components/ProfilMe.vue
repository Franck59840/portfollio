<template>
  <v-container class="d-flex diagonal-box">
    <v-row class="content d-flex justify-center">
      <div class="d-flex justify-center align-center col1">
        <v-img class="profil" :src="require('../assets/profil.jpg')" contain />
      </div>
      <div class="d-flex flex-column justify-center col2">
        <div class="display-2 font-weight-medium font-weight name">
          {{ $t("describe.name") }}
        </div>
        <div class="text-left mt-2 font-italic">
          {{ $t("describe.profil") }}
        </div>
        <div class="text-left mt-2">
          <v-icon class="mr-2"> mdi-24px mdi-email-outline</v-icon
          >{{ $t("describe.mail") }}
        </div>
        <div class="text-left mt-2">
          <v-icon class="mr-2">mdi-24px mdi-cellphone</v-icon
          >{{ $t("describe.mobile") }}
        </div>
        <div class="text-left mt-2">
          <v-icon class="mr-2">mdi-24px mdi-map-marker-radius</v-icon
          >{{ $t("describe.address") }}
        </div>
      </div>
    </v-row>
  </v-container>
</template>
<script>
export default {};
</script>

<style>
.profil {
  max-width: 200px;
  max-height: 200px;
  z-index: 10;
  -moz-border-radius: 200px;
  -webkit-border-radius: 200px;
  border-radius: 200px;
  box-shadow: 0 0 0 10px #677494, 0 0 0 25px #e7f9ff, 0 0 0 9px #fff,
    0 0 0 10px #fff, 0 0 0 20px #e7f9ff, 0 0 0 20px #e7f9ff;
}
.diagonal-box {
  margin-top: 170px;
  background-image: linear-gradient(45deg, #e7f9ff, #e7f9ff);
  transform: skewY(-5deg);
  /* border: solid 1px yellowgreen; */
}
.content {
  max-width: 100%;
  margin: 0 auto;
  transform: skewY(5deg);
}

.container {
  max-width: 100%;
  min-height: 400px;
}
li {
  text-decoration: none;
}
.col1 {
  margin-right: 50px;
}
.col2 {
  margin-top: 0;
  margin-left: 80px;
}
</style>
