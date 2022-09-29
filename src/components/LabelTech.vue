/
<template>
  <v-container>
    <div class="d-flex flex-wrap">
      <v-btn
        v-for="label in labels"
        :key="label.id"
        elevation="2"
        class="mt-4 ml-4 rounded-lg"
      >
        {{ $t(label.translateId) }}
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
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
        translateId: "label.node",
      },
      {
        translateId: "label.php",
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

<style></style>
