<template>
  <div class="container-fluid">
    <div class="row mt-2">
      <div class="col-md-4 col-sm-12 col-xl-3 col-lg-3">
        <BrowseSidebar/>
      </div>
      <div class="col-md-8 col-sm-12 col-xl-8 col-lg-8">
        <div class="container-fluid shadow-sm p-1 bg-white">
          <div class="controls text-left p-1">
            <h1 class="display-4">Lapsehoidjad</h1>
            <FeedControls/>
          </div>
          <Feed/>
          <b-container>
            <Pagination/>
          </b-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BrowseSidebar from "@/components/BrowseSidebar.vue";
import Feed from "@/components/Feed.vue";
import FeedControls from "@/components/FeedControls.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "Browse",
  components: {
    BrowseSidebar,
    Feed,
    FeedControls,
    Pagination
  }
};
</script>


<style scoped lang="less">
</style>
