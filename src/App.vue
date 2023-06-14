<template>
  <RouterView />
</template>

<script>
import axios from "axios";
import HeaderComponent from "./components/HeaderComponent.vue";
export default {
  name: "App",
  components: { HeaderComponent },
};
</script>

<style lang="scss" scoped></style>
