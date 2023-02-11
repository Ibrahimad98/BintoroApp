<script>
import { mapState, mapActions } from "pinia";
import InfiniteList from "vue3-infinite-list";
import { useBintoroStore } from "../stores/store";
import SosmedComponent from "../components/SosmedComponent.vue";
import NavbarComponent from "../components/NavbarComponent.vue";
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      items: [],
      num1: 0,
      num2: 2,
    };
  },
  components: {
    InfiniteList,
    SosmedComponent,
    NavbarComponent,
  },
  methods: {
    ...mapActions(useBintoroStore, [
      "changePage",
      "fetchArticles",
      "deleteArticle",
      "editArticle",
    ]),
    async loadMore() {
      const { data } = await axios.get(`articles?_start=${num1}&_end=${num2}`);
      this.items = [...this.items, ...data];
      this.num1 += 2;
      this.num2 += 2;
    },
  },
  computed: {
    ...mapState(useBintoroStore, ["articles"]),
  },
  created() {
    this.fetchArticles();
    // console.log(this.articles, "<>><<><><<><><><><><<><><><><>>,.");
  },
};
</script>
<template>
  <SosmedComponent />
  <NavbarComponent />
  <div>
    <div
      class="row"
      style="
        height: 685px;
        background-image: url('https://bintoroarchitect.co.id/wp-content/uploads/2021/11/bintoroarchitect-Tips-and-Tricks.webp');
      "
    >
      <div
        style="width: 100%; height: 100%; background-color: black; opacity: 0.5"
        class="d-flex align-items-center ms-5"
      >
        <div>
          <h1 style="color: white; opacity: 1 !important">News and Articles</h1>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="row" style="height: 500px">
      <div class="col-8">
        <div
          v-for="articles in articles"
          :key="items.id"
          class="card mb-5 ms-4 mt-4 shadow"
        >
          <img :src="articles.imgUrl" class="card-img-top" alt="..." />
          <div class="card-body m-3">
            <a
              id="card-title-link"
              style="text-decoration: none; color: black; transition: 0.3s"
              href="#"
              @click.prevent="changePage(`/articles/${articles.id}`)"
              ><h5 class="card-title">
                {{ articles.title }}
              </h5></a
            >
            <p class="card-text">
              <small class="text-muted">{{ articles.author }}</small>
            </p>
            <p class="card-text">
              {{
                articles.content.split(".")[0] +
                articles.content.split(".")[1] +
                " [...]"
              }}
            </p>
            <div class="d-flex">
              <a
                class="me-4"
                id="delete-label"
                href="#"
                style="text-decoration: none; color: red"
                @click.prevent="deleteArticle(articles.id)"
              >
                <div class="d-flex">
                  <span class="material-icons"> delete </span>
                  <p class="ms-1">delete this article</p>
                </div>
              </a>
              <a
                id="edit-label"
                href="#"
                style="text-decoration: none; color: #0ea5e9"
                @click.prevent="changePage(`/editForm/${articles.id}`)"
                ><div class="d-flex">
                  <span class="material-icons"> edit </span>
                  <p class="ms-1">edit this article</p>
                </div></a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="h-100 col-4">
        <h2 class="mt-3" style="color: black">Artikel terbaru</h2>
        <div
          v-for="articles in articles"
          style="height: 130px"
          class="row mt-3 mb-4"
        >
          <div class="col-4 d-flex align-items-center">
            <img
              style="width: 120px; height: 80px"
              :src="articles.imgUrl"
              alt="..."
            />
          </div>
          <div class="col-8 d-flex align-items-center">
            <div>
              <a
                @click.prevent="changePage(`/articles/${articles.id}`)"
                id="misc-news-title"
                href="#"
                style="text-decoration: none; color: black; transition: 0.3s"
              >
                <h6 class="mt-2">
                  {{ articles.title }}
                </h6>
              </a>
              <p class="card-text" style="margin-top: -5px">
                <small class="text-muted">{{ articles.author }}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#misc-news-title :hover {
  color: #ff8a00;
  transition: 0.3s;
}
#card-title-link :hover {
  color: #ff8a00;
  transition: 0.3s;
}
#delete-label :hover {
  color: darkred;
  transition: 0.3s;
}
#edit-label :hover {
  color: #0369a1;
  transition: 0.3s;
}
</style>
