<script>
import { mapState, mapActions } from "pinia";
import { useBintoroStore } from "../stores/store";
import SosmedComponent from "../components/SosmedComponent.vue";
import NavbarComponent from "../components/NavbarComponent.vue";

export default {
  name: "ArticleView",
  computed: {
    ...mapState(useBintoroStore, ["articleDetail", "articles"]),
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  components: {
    SosmedComponent,
    NavbarComponent,
  },
  methods: {
    ...mapActions(useBintoroStore, [
      "fetchArticleById",
      "fetchArticles",
      "changePage",
    ]),
  },
  created() {
    // console.log(this.$route.params.id, "params");
    this.fetchArticleById(this.id);
    this.fetchArticles();
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
          <h1 style="color: white; opacity: 1 !important">
            {{ articleDetail.title }}
          </h1>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="row" style="height: 500px">
      <div class="h-100 col-8">
        <div class="card mb-5 ms-4 mt-4 shadow">
          <img :src="articleDetail.imgUrl" class="card-img-top" alt="..." />
          <div class="card-body m-3">
            <p class="card-text">
              <small class="text-muted">{{ articleDetail.author }}</small>
            </p>
            <p class="card-text">
              {{ articleDetail.content }}
            </p>
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
</style>
