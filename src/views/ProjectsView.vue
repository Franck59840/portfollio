<template>
  <v-container>
    <h2 class="text-center mb-4">{{ $t("nav.projects") }}</h2>
    <v-row align-center justify="center" class="mx-0">
      <template v-for="(project, index) in projects">
        <v-col cols="12" sm="12" md="5" class="px-0 mx-2" :key="index">
          <v-card height="43% xs12 md6 " class="mb-4">
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

    <!-- Modal -->
    <div>
      <v-dialog v-model="dialog" width="75%" height="50%">
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
          <v-row class="mx-0" justify="center">
            <v-col
              v-for="picture in selectedProject.pictures"
              :key="picture.id"
              class="mx-2"
              color="grey lighten-3"
              cols="12"
              md="5"
            >
              <v-toolbar
                flat
                dense
                color="transparent"
                class="font-weight-bold"
              >
                {{ $t(picture.title) }}
              </v-toolbar>
              <v-img :src="picture.img" height="300px"></v-img>
            </v-col>
          </v-row>
          <v-card-actions class="justify-center mt-4">
            <v-btn @click="dialog = false">{{ $t("button.closed") }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>

<script>
import vinoImg1 from "../assets/portfollio/vinoteam/vino1.png";
import vinoImg2 from "../assets/portfollio/vinoteam/vino2.png";
import vinoImg3 from "../assets/portfollio/vinoteam/vino3.png";
import vinoImg4 from "../assets/portfollio/vinoteam/vino4.png";
import vinoImg5 from "../assets/portfollio/vinoteam/vino5.png";
import vinoImg6 from "../assets/portfollio/vinoteam/vino6.png";
import everImg1 from "../assets/portfollio/everetrofit/ever1.png";
import everImg2 from "../assets/portfollio/everetrofit/ever2.png";
import everImg3 from "../assets/portfollio/everetrofit/ever3.png";
import everImg4 from "../assets/portfollio/everetrofit/ever4.png";
import everImg5 from "../assets/portfollio/everetrofit/ever5.png";
import everImg6 from "../assets/portfollio/everetrofit/ever6.png";
import heroImg1 from "../assets/portfollio/wild-heroes/hero1.png";
import heroImg2 from "../assets/portfollio/wild-heroes/hero2.png";
import heroImg3 from "../assets/portfollio/wild-heroes/hero3.png";
import heroImg4 from "../assets/portfollio/wild-heroes/hero4.png";
import heroImg5 from "../assets/portfollio/wild-heroes/hero5.png";
import heroImg6 from "../assets/portfollio/wild-heroes/hero6.png";
import goodImg1 from "../assets/portfollio/goodealmap/good1.png";
import goodImg2 from "../assets/portfollio/goodealmap/good2.png";
import goodImg3 from "../assets/portfollio/goodealmap/good3.png";
import goodImg4 from "../assets/portfollio/goodealmap/good4.png";
import goodImg5 from "../assets/portfollio/goodealmap/good5.png";
import goodImg6 from "../assets/portfollio/goodealmap/good6.png";

export default {
  data() {
    return {
      projects: [
        {
          title: "project1.title",
          description: "project1.describe",
          screenshot: "button.screenshot",
          img: goodImg1,
          date: "project1.date",
          pictures: [
            {
              id: 1,
              title: "project1.homepage",
              img: goodImg1,
            },
            {
              id: 2,
              title: "project1.login",
              img: goodImg2,
            },
            {
              id: 3,
              title: "project1.list",
              img: goodImg3,
            },

            {
              id: 4,
              title: "project1.add",
              img: goodImg4,
            },
            {
              id: 5,
              title: "project1.login",
              img: goodImg5,
            },
            {
              id: 6,
              title: "project1.details",
              img: goodImg6,
            },
          ],
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
              label: "label.php",
            },
            {
              label: "label.symfony",
            },
            {
              label: "label.twig",
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
          title: "project2.title",
          description: "project2.describe",
          screenshot: "button.screenshot",
          img: vinoImg1,
          date: "project2.date",
          pictures: [
            {
              id: 1,
              title: "project2.homepage",
              img: vinoImg1,
            },
            {
              id: 2,
              title: "project2.dashboard",
              img: vinoImg2,
            },
            {
              id: 3,
              title: "project2.search",
              img: vinoImg3,
            },

            {
              id: 4,
              title: "project2.details",
              img: vinoImg4,
            },
            {
              id: 5,
              title: "project2.list",
              img: vinoImg5,
            },
            {
              id: 6,
              title: "project2.map",
              img: vinoImg6,
            },
          ],
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
          title: "project3.title",
          description: "project3.describe",
          screenshot: "button.screenshot",
          img: everImg1,
          pictures: [
            {
              id: 1,
              title: "project3.homepage",
              img: everImg1,
            },
            {
              id: 2,
              title: "project3.contact",
              img: everImg2,
            },
            {
              id: 3,
              title: "project3.team",
              img: everImg3,
            },

            {
              id: 4,
              title: "project3.details",
              img: everImg4,
            },
            {
              id: 5,
              title: "project3.list",
              img: everImg5,
            },
            {
              id: 6,
              title: "project3.details",
              img: everImg6,
            },
          ],
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
              label: "label.react",
            },
            {
              label: "label.reactAdmin",
            },
            {
              label: "label.nodeMailer",
            },
            {
              label: "label.notion",
            },
            {
              label: "label.leaflet",
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
          title: "project4.title",
          description: "project4.describe",
          screenshot: "button.screenshot",
          img: heroImg1,
          date: "project4.date",
          pictures: [
            {
              id: 1,
              title: "project4.homepage",
              img: heroImg1,
            },
            {
              id: 2,
              title: "project4.details",
              img: heroImg2,
            },
            {
              id: 3,
              title: "project4.article",
              img: heroImg3,
            },

            {
              id: 4,
              title: "project4.rules",
              img: heroImg4,
            },
            {
              id: 5,
              title: "project4.more",
              img: heroImg5,
            },
            {
              id: 6,
              title: "project4.homepage",
              img: heroImg6,
            },
          ],
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
              label: "label.api",
            },
            {
              label: "label.github",
            },
            {
              label: "label.git",
            },
            {
              label: "label.figma",
            },
          ],
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
