<template>
  <v-footer padless>
    <v-card
      color="#E7F9FF"
      flat
      tile
      class="py-5 px-5 text-center"
      width="100%"
    >
      <v-row>
        <v-col cols="12" sm="4">
          <v-card-text class="white--text pt-2">
            <v-btn icon>
              <v-icon> fa-brands fa-github</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon> fa-brands fa-linkedin-in</v-icon>
            </v-btn>
          </v-card-text>
        </v-col>

        <v-col cols="12" sm="4">
          <v-card-text class="pt-2"> </v-card-text>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card-text class="pt-4">
            <v-icon color="#A7121D">mdi-heart</v-icon>

            {{ $t("foot.createBy") }} {{ $t("describe.name") }}
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>

<script>
export default {};
</script>

<style></style>
