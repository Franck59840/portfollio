<template>
  <v-container class="d-flex diagonal-box">
    <v-row class="content d-flex justify-center">
      <div class="d-flex justify-center align-center mb-4 col1">
        <v-img class="profil" :src="require('../assets/profil.jpg')" contain />
      </div>
      <div class="d-flex flex-column justify-center col2 mt-16">
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
        <div class="white--text pt-2 justify-center">
          <v-btn href="https://github.com/Franck59840" icon target="_blank">
            <v-icon> fa-brands fa-github</v-icon>
          </v-btn>
          <v-btn
            class="ml-2"
            href="https://www.linkedin.com/in/franck-depoorter/"
            icon
            target="_blank"
          >
            <v-icon> fa-brands fa-linkedin-in</v-icon>
          </v-btn>
          <v-btn
            class="ml-2"
            href="https://twitter.com/masaiyugi"
            icon
            target="_blank"
          >
            <v-icon> fa-brands fa-twitter</v-icon>
          </v-btn>
        </div>
      </div>
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
  mounted() {
    this.isMobile = window.innerWidth <= 300;
  },
};
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
  margin-top: 15%;
  background-image: linear-gradient(45deg, #e7f9ff, #e7f9ff);
  transform: skewY(-5deg);
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
.col2 {
  padding-left: 60px;
  margin-bottom: 100px;
}
.name {
  color: #677494;
}
</style>
