<template>
  <div>
    <ul class="list-unstyled">
      <li class="media p-0 mb-1" v-for="(comment, index) in comments" :key="index">
        <Comment :comment="comment"/>
      </li>
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
  data: function() {
    return {
      comments: [
        {
          id: 0,
          name: "Mirgo Moorits",
          rating: 4.6,
          url:
            "https://www.whatsappprofiledpimages.com/wp-content/uploads/2018/12/Very-Funny-Profile-Pictures.jpg",
          content:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
        },
        {
          id: 1,
          name: "Mirgo Moorits",
          rating: 4.6,
          url:
            "https://www.whatsappprofiledpimages.com/wp-content/uploads/2018/12/Very-Funny-Profile-Pictures.jpg",
          content:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
        },
        {
          id: 2,
          name: "Mirgo Moorits",
          rating: 4.6,
          url:
            "https://www.whatsappprofiledpimages.com/wp-content/uploads/2018/12/Very-Funny-Profile-Pictures.jpg",
          content:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>

</style>
