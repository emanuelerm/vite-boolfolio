<template>
  <div>
    <div class="container">
      <div class="row">
        <h1>{{ title }}</h1>
        <div
          class="col flex-wrap"
          v-for="project in projects"
          :key="project.id"
        >
          <div class="card">
            <div class="card-title text-center">
              <h3>{{ project.title }}</h3>
            </div>
            <div class="card-body">
              <p>
                Description: <br />
                {{ project.description }}
              </p>
              <small>Type ID: {{ project.type_id }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
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
};
</script>

<style lang="scss" scoped></style>
