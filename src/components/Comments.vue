<template>
  <div>
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
    pageable: {
      type: Boolean,
      default: function() {
        return true;
      }
    }
  },
  data: function() {
    return {
      currentPage: 1,
      comments: [
        {
          id: 0,
          name: "M. M.",
          rating: 4.6,
          url:
            "https://www.whatsappprofiledpimages.com/wp-content/uploads/2018/12/Very-Funny-Profile-Pictures.jpg",
          content:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
        },
        {
          id: 1,
          name: "M. M.",
          rating: 4.6,
          url:
            "https://www.whatsappprofiledpimages.com/wp-content/uploads/2018/12/Very-Funny-Profile-Pictures.jpg",
          content:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
        },
        {
          id: 2,
          name: "M. M.",
          rating: 4.6,
          url:
            "https://www.whatsappprofiledpimages.com/wp-content/uploads/2018/12/Very-Funny-Profile-Pictures.jpg",
          content:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
        },
        {
          id: 3,
          name: "M. M.",
          rating: 4.6,
          url:
            "https://www.whatsappprofiledpimages.com/wp-content/uploads/2018/12/Very-Funny-Profile-Pictures.jpg",
          content:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
        },
        {
          id: 4,
          name: "M. M.",
          rating: 4.6,
          url:
            "https://www.whatsappprofiledpimages.com/wp-content/uploads/2018/12/Very-Funny-Profile-Pictures.jpg",
          content:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
        },
        {
          id: 5,
          name: "M. M.",
          rating: 4.6,
          url:
            "https://www.whatsappprofiledpimages.com/wp-content/uploads/2018/12/Very-Funny-Profile-Pictures.jpg",
          content:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
        }
      ]
    };
  },
  computed: {
    rows() {
      return this.comments.length;
    }
  }
};
</script>

<style lang="less" scoped>
</style>
