<template>
  <div>
    <b-card body-class="p-1">
      <b-media>
        <b-img slot="aside" :src="comment.url" width="50" alt="placeholder" class="p-1 rounded-circle"></b-img>
        <div class="comment-header">
          <p class="h6">{{comment.name}}</p>
          <div class="float-right">
            <Rating :rating="comment.rating" :id="'comment-' + comment.id" :size="'sm'"/>
          </div>
        </div>
        <hr class="my-1">
        <p class="m-0">{{comment.content}}</p>
      </b-media>
    </b-card>
  </div>
</template>

<script>
import Rating from "@/components/Rating.vue";

export default {
  name: "Comment",
  components: {
    Rating
  },
  props: {
    comment: {
      type: Object,
      default: () => ({
        id: Number,
        name: String,
        rating: Number,
        url: String,
        content: String
      })
    }
  }
};
</script>

<style lang="less" scoped>
.media {
  img {
    width: 5rem;
    height: 5rem;
  }
}
.comment-header {
  p {
    display: inline-block;
  }
}
</style>

