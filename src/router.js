import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "./pages/LandingPage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import SingolProjectPage from "./pages/SingolProjectPage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ContactsPage from "./pages/ContactsPage.vue";
import RedirectingPage from "./pages/RedirectingPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingPage,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsPage,
    },
    {
      path: "/projects/:slug",
      name: "singol_project",
      component: SingolProjectPage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: ContactsPage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "redirecting",
      component: RedirectingPage,
    },
  ],
});

export { router };
