<template>
  <div class="main bg-white mt-0">
    <ul class="list-unstyled">
      <li v-for="(sitter, index) in sitters" :key="index" class="m-1 mb-2>">
        <b-card body-class="p-0 m-0 shadow-sm">
          <b-media @click="redirectToProfile(sitter.id)">
            <b-img
              slot="aside"
              :src="sitter.img"
              alt="placeholder"
              class="m-2 shadow-sm rounded-circle border"
            ></b-img>
            <div class="comment-header pt-2">
              <p
                class="h5 m-0 d-inline-block"
              >{{sitter.firstName}} {{sitter.lastName}}, {{sitter.age}}</p>
              <div class="float-right mr-2">
                <Rating :rating="sitter.rating" :id="'feed-sitter' + index" :size="'sm'"/>
              </div>
            </div>
            <hr class="my-0">
            <p class="d-block text-secondary mr-2 description">{{sitter.description}}</p>
          </b-media>
        </b-card>
      </li>
    </ul>
    <Pagination/>
  </div>
</template>

<script>
import Rating from "@/components/Rating.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "Feed",
  components: {
    Rating,
    Pagination
  },
  methods: {
    redirectToProfile(sitterId) {
      this.$router.push({
        path: "/profile"
      });
    }
  },
  data: function() {
    return {
      sitters: [
        {
          id: 1,
          firstName: "Mari",
          lastName: "Juurikas",
          age: "45",
          rating: 3.5,
          description: "Tere, Vajuta minule peale, et minna mu profiilile.",
          img:
            "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
        },
        {
          id: 2,
          firstName: "Anna",
          lastName: "Grigorjev",
          age: "25",
          rating: 4,
          description: "Tsau, mulle meeldivad lapsed ja loomad",
          img:
            "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
        },
        {
          id: 3,
          firstName: "Eeva",
          lastName: "Marius",
          age: "23",
          rating: 4.2,
          description: "Tere, olen Eeva jne jne",
          img:
            "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
        }
      ]
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
