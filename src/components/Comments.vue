<template>
  <div>
    <p v-if="rows == 0">Lapsehoidjal puuduvad hinnangud</p>
    <ul class="list-unstyled">
      <li class="m-1" v-for="(comment, index) in comments" :key="index">
        <Comment v-if="index < limit" :comment="comment"/>
      </li>
      <div v-if="pageable" class="mt-3">
        <b-pagination v-model="currentPage" :total-rows="rows" align="center" :per-page="limit"></b-pagination>
      </div>
    </ul>
  </div>
</template>

<script>
import Comment from "@/components/Comment.vue";

export default {
  name: "Comments",
  components: {
    Comment
  },
  props: {
    limit: Number,
    sitterId: {
      type: Number,
      required: true,
      default: 0
    },
    pageable: {
      type: Boolean,
      default: function() {
        return true;
      }
    }
  },
  created() {
    var comments = this.$comments;
    for (var i = 0; i < comments.length; i++) {
      var comment = comments[i];
      if (comment.id == this.sitterId) {
        this.comments = comment.comments;
        this.rows = comment.comments.length;
      }
    }
  },
  data: function() {
    return {
      currentPage: 1,
      comments: null,
      rows: 0
    };
  }
};
</script>

<style lang="less" scoped>
</style>
