<template>
  <v-container class="d-flex row justify-center img" width="100%" contain>
    <v-card
      class="ma-8 card"
      width="250"
      height="250"
      v-for="card in cards"
      :key="card.id"
    >
      <v-row class="d-flex">
        <img :src="card.img" class="imgResize mt-4" contain />
        <v-card-title class="">{{ $t(card.title) }}</v-card-title>
      </v-row>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        {{ $t(card.describe) }}
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import iconReact from "../assets/react.svg";
import iconVue from "../assets/vue.svg";
import iconNode from "../assets/node.svg";
import iconPhp from "../assets/php.svg";
import iconSymfony from "../assets/symfony.svg";
import iconMysql from "../assets/mysql.svg";
import iconHtml from "../assets/html.svg";
import iconCss from "../assets/css.svg";
import iconJs from "../assets/js.svg";

export default {
  data: () => ({
    cards: [
      {
        title: "card.vue",
        img: iconVue,
        describe: "card.describeVue",
      },
      {
        title: "card.react",
        img: iconReact,
        describe: "card.describeReact",
      },
      {
        title: "card.node",
        img: iconNode,
        describe: "card.describeNode",
      },
      {
        title: "card.php",
        img: iconPhp,
        describe: "card.describePhp",
      },
      {
        title: "card.symfony",
        img: iconSymfony,
        describe: "card.describeSymfony",
      },
      {
        title: "card.mysql",
        img: iconMysql,
        describe: "card.describeMysql",
      },
      {
        title: "card.html",
        img: iconHtml,
        describe: "card.describeHtml",
      },
      {
        title: "card.css",
        img: iconCss,
        describe: "card.describeCss",
      },
      {
        title: "card.js",
        img: iconJs,
        describe: "card.describeJs",
      },
    ],
  }),
};
</script>

<style>
.imgResize {
  width: 35px;
  height: 35px;
  margin-left: 30px;
}
.img {
  background-image: url(../assets/skills.svg);

  margin: 0;
}

.card:hover {
  background: #e7f9ff;
}
</style>
