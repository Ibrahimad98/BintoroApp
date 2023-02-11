import { defineStore } from "pinia";
import axios from "../config/axios";
import Swal from "sweetalert2";

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
        // console.log(data, "ini dr store");

        this.articles = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchArticleById(id) {
      try {
        const { data } = await axios.get(`articles/${id}`);
        // console.log(data, "ini dr store by id");

        this.articleDetail = data;
      } catch (error) {
        console.log(error);
      }
    },

    async addArticle(payload) {
      try {
        const { data } = await axios.post("articles", {
          title: payload.title,
          content: payload.content,
          imgUrl: payload.imgUrl,
          author: payload.author,
        });
        console.log("berhasil menambahkan data dari store");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sukses menambahkan artikel",
          showConfirmButton: false,
          timer: 1500,
        });
        this.changePage("/");
      } catch (error) {
        console.log(error);
      }
    },

    async editArticle(id, dataSent) {
      // console.log(id, "ini id");
      // console.log(dataSent.title, "ini data");
      try {
        const { data } = await axios.put(`articles/${id}`, dataSent);
        console.log("berhasil mengedit data dengan id " + id);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sukses mengedit artikel dengan id " + id,
          showConfirmButton: false,
          timer: 1500,
        });
        this.changePage("/");
      } catch (error) {
        console.log(error);
      }
    },

    async deleteArticle(id) {
      try {
        const { data } = await axios.delete(`articles/${id}`);
        console.log("berhasil menghapus artikel");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sukses menghapus artikel",
          showConfirmButton: false,
          timer: 1500,
        });
        this.fetchArticles();
      } catch (error) {
        console.log(error);
      }
    },
  },
});
