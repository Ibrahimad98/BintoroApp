<script>
import { mapActions } from "pinia";
import { useBintoroStore } from "../stores/store";

export default {
  name: "NavbarComponent",
  methods: { ...mapActions(useBintoroStore, ["changePage"]) },
};
</script>
<template>
  <nav style="background-color: black" class="navbar p-3">
    <div class="container-fluid row d-flex">
      <div style="overflow: hidden" class="col-4">
        <a href="#" @click.prevent="changePage('/')">
          <img
            style="width: 150px"
            src="https://bintoroarchitect.co.id/wp-content/uploads/2021/11/Architect-Putih-scaled.webp"
          />
        </a>
      </div>
      <div style="overflow: hidden" class="col-8">
        <div class="d-flex">
          <a
            href="#"
            @click.prevent="changePage('/addForm')"
            style="text-decoration: none"
            class="justify-content-start text-light"
            ><strong>Add Product</strong></a
          >
        </div>
      </div>
    </div>
  </nav>
</template>
