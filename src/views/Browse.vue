<template>
  <div class="container">
    <div class="row mt-2">
      <div class="col-12 col-md-4 col-lg-4 col-xl-3">
        <BrowseSidebar/>
      </div>
      <div class="col-12 col-md-8 col-lg-8 col-xl-9">
        <div class="container-fluid shadow p-1 bg-white border">
          <h1 class="display-4 p-2 m-0">Lapsehoidjad</h1>
          <hr class="my-2">
          <Feed/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BrowseSidebar from "@/components/BrowseSidebar.vue";
import Feed from "@/components/Feed.vue";

export default {
  name: "Browse",
  components: {
    BrowseSidebar,
    Feed
  }
};
</script>


<style scoped lang="less">
@media (max-width: 1200px) {
  .container {
    width: 100%;
    max-width: none;
  }
}
</style>
