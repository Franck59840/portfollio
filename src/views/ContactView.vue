<template>
  <v-container class="d-flex">
    <v-row class="d-flex justify-center">
      <div class="d-flex justify-center align-center mt-8">
        <v-img class="profil" :src="require('../assets/profil.jpg')" contain />
      </div>
      <div class="d-flex flex-column justify-center col2 mt-16">
        <div class="display-2 font-weight-medium font-weight name">
          {{ $t("describe.name") }}
        </div>
        1
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
        <div class="white--text pt-2">
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
