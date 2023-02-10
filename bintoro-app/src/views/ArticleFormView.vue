<script>
import SosmedComponent from "../components/SosmedComponent.vue";
import NavbarComponent from "../components/NavbarComponent.vue";

export default {
  name: "ArticleFormView",
  components: {
    SosmedComponent,
    NavbarComponent,
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
          <h1 style="color: white; opacity: 1 !important">Add an Article</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
