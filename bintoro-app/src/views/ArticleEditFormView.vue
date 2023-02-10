<script>
import SosmedComponent from "../components/SosmedComponent.vue";
import NavbarComponent from "../components/NavbarComponent.vue";
import { mapActions, mapState } from "pinia";
import { useBintoroStore } from "../stores/store";

export default {
  name: "ArticleEditFormView",
  components: {
    SosmedComponent,
    NavbarComponent,
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {
    ...mapState(useBintoroStore, ["articleDetail"]),
  },
  methods: {
    ...mapActions(useBintoroStore, ["editArticle", "fetchArticleById"]),

    submitForm() {
      this.editArticle(this.id, this.articleDetail);
    },
  },
  created() {
    this.fetchArticleById(this.id);
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
          <h1 style="color: white; opacity: 1 !important">Edit an Article</h1>
        </div>
      </div>
    </div>
    <div class="container mt-4 mb-5">
      <form @submit.prevent="submitForm" class="form" action="">
        <div class="mb-3">
          <p for="title-input" style="margin-bottom: -2px">Title</p>
          <input
            required
            v-model="articleDetail.title"
            class="form-control"
            type="text"
            placeholder="input title here"
          />
        </div>
        <div class="mb-3">
          <p for="image-input" style="margin-bottom: -2px">Image</p>
          <input
            required
            v-model="articleDetail.imgUrl"
            class="form-control"
            type="url"
            placeholder="input image here"
          />
        </div>
        <div class="mb-3">
          <p for="content-input" style="margin-bottom: -2px">Content</p>
          <textarea
            required
            v-model="articleDetail.content"
            class="form-control"
            placeholder="input content here"
          ></textarea>
        </div>
        <div class="mb-3">
          <p for="author-input" style="margin-bottom: -2px">Author</p>
          <input
            required
            v-model="articleDetail.author"
            class="form-control"
            type="text"
            placeholder="input author here"
          />
        </div>
        <div>
          <input class="btn btn-primary" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>
