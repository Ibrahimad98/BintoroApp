import { defineStore } from "pinia";
import axios from "../config/axios";
// const localhost = "http://localhost:3000";

export const useBintoroStore = defineStore("bintoro", {
  state: () => ({
    articles: [],
    articleDetail: {},
  }),
  actions: {
    changePage(path) {
      this.router.push(path);
    },
    async fetchArticles() {
      try {
        const { data } = await axios.get(`articles`);
        console.log(data, "ini dr store");

        this.articles = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchArticleById(id) {},
  },
});
