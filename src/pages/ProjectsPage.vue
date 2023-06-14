<template>
  <HeaderComponent />
  <div class="container">
    <div class="row">
      <h1>{{ title }}</h1>
      <div class="col flex-wrap" v-for="project in projects" :key="project.id">
        <div class="card">
          <div class="card-title text-center">
            <h3>{{ project.title }}</h3>
          </div>
          <div class="card-body">
            <p>
              Description: <br />
              {{ project.description }}
            </p>
            <small>Type: {{ project.type.name }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HeaderComponent from "../components/HeaderComponent.vue";

export default {
  data() {
    return {
      title: "Boolfolio",
      projects: [],
      apiUrl: "http://127.0.0.1:8000/api",
    };
  },
  methods: {
    getProjects() {
      axios.get(`${this.apiUrl}/projects`).then((res) => {
        // console.log(res.data);
        this.projects = res.data.results.data;
      });
    },
  },
  mounted() {
    this.getProjects();
  },
  components: { HeaderComponent },
};
</script>

<style lang="scss" scoped></style>
