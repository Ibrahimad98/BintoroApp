import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ArticleView from "../views/ArticleView.vue";
import ArticleFormView from "../views/ArticleFormView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/articles/:id",
      name: "ArticleView",
      component: ArticleView,
    },
    {
      path: "/addForm",
      name: "ArticleFormView",
      component: ArticleFormView,
    },
  ],
});

export default router;
