<template>
  <v-container>
    <h2 class="text-center mb-4">{{ $t("nav.projects") }}</h2>
    <v-row align-center justify="center" class="mx-0">
      <template v-for="(project, index) in projects">
        <v-col cols="12" sm="12" md="5" class="px-0 mx-2" :key="index">
          <v-card height="430px xs12 md6 " class="mb-4">
            <v-img :src="project.img" height="200px"></v-img>
            <v-card-text>
              <h5 class="card-title">{{ $t(project.title) }}</h5>
              <p class="card-text">{{ $t(project.description) }}</p>
              <v-chip
                class="mr-2 mt-2"
                outlined
                color="primary"
                v-for="tag in project.tags"
                :key="tag.id"
              >
                {{ $t(tag.label) }}
              </v-chip>
              <v-card-actions class="justify-end">
                <v-btn color="#E7F9FF" @click="showProjectDetail(project)">{{
                  $t("button.more")
                }}</v-btn>
              </v-card-actions>
            </v-card-text>
          </v-card>
        </v-col>
      </template>
    </v-row>

    <!-- Modal pour afficher les détails du projet -->
    <div>
      <v-dialog v-model="dialog" width="50%" height="50%">
        <v-card>
          <v-card-title>
            <h3 class="text-center">{{ $t(selectedProject.title) }}</h3>
          </v-card-title>
          <v-card-text>
            {{ $t(selectedProject.date) }}
          </v-card-text>
          <v-card-text>{{ $t(selectedProject.description) }}</v-card-text>
          <v-divider class="mt-2 mb-2"></v-divider>
          <div class="text-center">
            <v-chip
              class="mr-1 ml-1 mt-2"
              v-for="tag in selectedProject.tags"
              :key="tag.label"
            >
              {{ $t(tag.label) }}
            </v-chip>
          </div>
          <v-divider class="mt-2 mb-2"></v-divider>
          <v-card-title>
            <h3 class="text-center">{{ $t(selectedProject.screenshot) }}</h3>
          </v-card-title>
          <v-card-actions>
            <v-btn color="red" @click="dialog = false">{{
              $t("button.closed")
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>

<script>
import vinoImg1 from "../assets/portfollio/vinoteam/vino1.png";
import vinoImg2 from "../assets/portfollio/vinoteam/vino2.png";
export default {
  data() {
    return {
      projects: [
        {
          title: "project1.title",
          description: "project1.detail",
          screenshot: "button.screenshot",
          img: vinoImg1,
          img1: vinoImg2,
          date: "2022",
          tags: [
            {
              label: "label.html",
            },
            {
              label: "label.css",
            },
            {
              label: "label.js",
            },
            {
              label: "label.vue",
            },
            {
              label: "label.vuetify",
            },
            {
              label: "label.node",
            },
            {
              label: "label.mysql",
            },
            {
              label: "label.figma",
            },
            {
              label: "label.git",
            },
            {
              label: "label.github",
            },
          ],
        },
        {
          title: "Projet 2",
          description: "Description du projet 2",
          image: "image2.jpg",
        },
        {
          title: "Projet 3",
          description: "Description du projet 3",
          image: "image3.jpg",
        },
      ],
      selectedProject: {},
      dialog: false,
    };
  },
  methods: {
    showProjectDetail(project) {
      this.selectedProject = project;
      this.dialog = true;
    },
  },
};
</script>
