<template>
  <v-container class="containerLabel">
    <d-flex>
      <v-btn
        v-for="label in labels"
        :key="label.id"
        elevation="2"
        class="mt-4 ml-4 rounded-lg"
      >
        {{ $t(label.translateId) }}
      </v-btn>
    </d-flex>
    <div class="mt-8 d-flex justify-center">
      <v-btn color="primary" @click="downloadCV">{{
        $t("button.download")
      }}</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  methods: {
    downloadCV() {
      const link = document.createElement("a");
      link.href =
        "https://drive.google.com/file/d/1xY_j0r_QeXwwWhLGNZfgxIj2KEnQmYBK/view?usp=share_link";
      link.setAttribute("download", "CV.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
    },
  },
  data: () => ({
    model: 0,
    labels: [
      {
        translateId: "label.html",
      },
      {
        translateId: "label.css",
      },
      {
        translateId: "label.js",
      },
      {
        translateId: "label.react",
      },
      {
        translateId: "label.vue",
      },
      {
        translateId: "label.node",
      },
      {
        translateId: "label.express",
      },
      {
        translateId: "label.php",
      },
      {
        translateId: "label.twig",
      },
      {
        translateId: "label.symfony",
      },
      {
        translateId: "label.crud",
      },
      {
        translateId: "label.mysql",
      },
      {
        translateId: "label.git",
      },
      {
        translateId: "label.github",
      },
      {
        translateId: "label.scrum",
      },
      {
        translateId: "label.leaflet",
      },
      {
        translateId: "label.formation",
      },
      {
        translateId: "label.po",
      },
      {
        translateId: "label.project",
      },
      {
        translateId: "label.teamspirit",
      },
      {
        translateId: "label.teamwork",
      },
      {
        translateId: "label.communication",
      },
      {
        translateId: "label.organisation",
      },
      {
        translateId: "label.learn",
      },
      {
        translateId: "label.independance",
      },
      {
        translateId: "label.vscode",
      },
      {
        translateId: "label.linux",
      },
      {
        translateId: "label.nocode",
      },
      {
        translateId: "label.bubble",
      },
      {
        translateId: "label.figma",
      },
      {
        translateId: "label.notion",
      },
      {
        translateId: "label.zappier",
      },
      {
        translateId: "label.webflow",
      },
      {
        translateId: "label.airtable",
      },
    ],
  }),
};
</script>

<style>
.containerLabel {
  width: 80%;
}
.test1:hover {
  background: green;
}
</style>
