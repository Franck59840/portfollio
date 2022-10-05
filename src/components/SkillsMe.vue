<template>
  <v-card>
    <v-img
      class="img"
      :src="require('../assets/skills.svg')"
      height="800px"
      width="100% "
    />
    <v-card
      class="mx-auto my-12"
      max-width="374"
      v-for="card in cards"
      :key="card.id"
    >
      <v-flex class="row">
        <v-img :src="cards.img" height="25px" width="25px" />

        <v-card-title>{{ cards.title }}</v-card-title>
      </v-flex>

      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        Utilisation de la librairie React (notamment les Hooks) pour la partie
        front-end.
      </v-card-text>
    </v-card>
  </v-card>
</template>
<script>
// import iconReact from "../assets/react_icon.png";
export default {
  model: 0,
  data: function () {
    return {
      cards: [
        {
          title: "Do the dishes",
        },
        {
          title: "Take out the trash",
        },
        {
          title: "Mow the lawn",
        },
      ],
    };
  },
};
</script>

<style>
.img {
  border: solid red 1px;
}
</style>
