<script>
import { mapState, mapActions } from "pinia";
import SosmedComponent from "../components/SosmedComponent.vue";

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
  },
  methods: {
    // ...mapActions(useMovieStore, []),
  },
  created() {},
};
</script>
<template>
  <SosmedComponent />
</template>
