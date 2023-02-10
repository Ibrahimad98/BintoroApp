<script>
import { mapState, mapActions } from "pinia";
import SosmedComponent from "../components/SosmedComponent.vue";
import NavbarComponent from "../components/NavbarComponent.vue";

export default {
  name: "HomeView",
  computed: {
    // ...mapState(useMovieStore, []),
  },
  data() {
    return {};
  },
  components: {
    SosmedComponent,
    NavbarComponent,
  },
  methods: {
    // ...mapActions(useMovieStore, []),
  },
  created() {},
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
      <div class="h-100 col-8">
        <div class="card mb-3 ms-4 mt-4">
          <img
            src="https://arsitagx-master-article.s3.ap-southeast-1.amazonaws.com/article-photo/969/Colorbond-artikel-cover.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <a
              id="card-title-link"
              style="text-decoration: none; color: black"
              href="#"
              ><h5 class="card-title">
                Colorbond Indonesia: Menjawab Kebutuhan Konsep Arsitektur Modern
                Masa Depan
              </h5></a
            >
            <p class="card-text">
              Para ilmuwan telah sepakat bahwa perilaku manusia, termasuk dalam
              mendesain bangunan dan lingkungan, turut berperan serta dalam
              memicu terjadinya perubahan iklim. Oleh karena itu, penting sekali
              untuk memikirkan cara-cara baru dalam mendesain bangunan dan
              lingkungan dengan metode yang lebih ramah lingkungan.
            </p>
            <p class="card-text">
              <small class="text-muted">Author: Arsitag</small>
            </p>
          </div>
        </div>
      </div>
      <div style="background-color: green" class="h-100 col-4">
        <h2 class="mt-3" style="color: black">Artikel terbaru</h2>
      </div>
    </div>
  </div>
</template>
<style>
#card-title-link :hover {
  color: #ff8a00;
  transition: 0.3s;
}
</style>
