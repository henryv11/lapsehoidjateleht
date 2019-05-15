<template>
  <div class="main bg-white mt-0">
    <ul class="list-unstyled">
      <li v-for="sitter in sitters" :key="sitter.id" class="m-1 mb-2>">
        <b-card body-class="p-0 m-0 shadow-sm">
          <b-media @click="redirectToProfile(parseInt(sitter.id, 10))">
            <b-img
              slot="aside"
              :src="sitter.imgUrl"
              alt="placeholder"
              class="m-2 shadow-sm rounded-circle border"
            ></b-img>
            <div class="comment-header pt-2">
              <p
                class="h5 m-0 d-inline-block"
              >{{sitter.firstName}} {{sitter.lastName}}, {{sitter.age}}</p>
              <div class="float-right mr-2">
                <Rating :rating="sitter.rating" :id="'feed-sitter' + sitter.id" :size="'sm'"/>
              </div>
            </div>
            <hr class="my-0">
            <p class="d-block text-secondary mr-2 description">{{sitter.description}}</p>
          </b-media>
        </b-card>
      </li>
    </ul>
    <b-pagination
      v-model="currentPage"
      class="ml-2"
      :total-rows="rows"
      :per-page="perPage"
    ></b-pagination>
  </div>
</template>

<script>
import Rating from "@/components/Rating.vue";

export default {
  name: "Feed",
  components: {
    Rating
  },
  methods: {
    redirectToProfile(id) {
      this.$router.push({
        name: "profile",
        params: { sitterId: id }
      });
    },
    fetchSitters() {
      this.axios
        .get("https://my.api.mockaroo.com/sitter.json?key=6a5a1640")
        .then(response => (this.sitters = response.data));
    }
  },
  mounted() {
    this.fetchSitters();
  },
  data: function() {
    return {
      sitters: null,
      rows: 1000,
      perPage: 20,
      currentPage: 1
    };
  }
};
</script>

<style scoped lang="less">
.card {
  img {
    width: 6rem;
    height: 6rem;
  }
}
.card:hover {
  cursor: pointer;
  img {
    transform: scale(1.02);
  }
}
</style>
