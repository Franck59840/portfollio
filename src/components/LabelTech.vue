/
<template>
  <v-container>
    <v-btn
      v-for="label in labels"
      :key="label.id"
      elevation="2"
      class="mt-2 ml-2 test rounded-lg"
    >
      {{ label }}
    </v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    labels: [
      "HTML5",
      "CSS3",
      "Javascript",
      "React",
      "Node JS",
      "PHP",
      "Symfony",
      "MySQL",
      "GIT",
      "Github",
      "SCRUM",
      "Formation",
      "Product Owner",
      "Gestion de projet",
      "Esprit d'équipe",
      "Communication",
      "Organisation",
      "Apprendre",
      "Autonomie",
      "Linux",
      "No Code",
      "Bubble",
      "Figma",
      "Notion",
      "Zappier",
      "Webflow",
      "Airtable",
    ],
  }),
};
</script>

<style>
.test {
  border: solid 2px #677494;
  color: white;
}
</style>
