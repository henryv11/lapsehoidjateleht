<template>
  <div class="main bg-white mt-0">
    <ul class="list-unstyled">
      <li
        class="media shadow-sm bg-white p-2 mt-4 ml-2 mr-2"
        v-for="(sitter, index) in sitters"
        :key="index"
      >
        <img class="img-thumbnail align-self-center mr-3" :src="sitter.img" alt="Profile picture">
        <div class="media-body">
          <div class="d-flex bd-highlight">
            <div class="bd-highlight">
              <h5>{{sitter.firstName}} {{sitter.lastName}}, {{sitter.age}}</h5>
            </div>
            <div class="ml-auto bd-highlight">
              <Rating :rating="sitter.rating" :id="'feed-sitter' + index" :size="'sm'"/>
            </div>
          </div>
          <hr class="my-1">
          <p class="lead">{{sitter.description}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Rating from "@/components/Rating.vue";

export default {
  name: "Feed",
  components: {
    Rating
  },
  data: function() {
    return {
      sitters: [
        {
          firstName: "Maiu",
          lastName: "Piimaauto",
          age: "45",
          rating: 1,
          description:
            "tere olen maiu ja mulle meelidb munne imeda ja piimaga klistiiri teha",
          img:
            "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
        },
        {
          firstName: "Maiu",
          lastName: "Piimaauto",
          age: "45",
          rating: 2.5,
          description:
            "tere olen maiu ja mulle meelidb munne imeda ja piimaga klistiiri teha",
          img:
            "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
        },
        {
          firstName: "Maiu",
          lastName: "Piimaauto",
          age: "45",
          rating: 3,
          description:
            "tere olen maiu ja mulle meelidb munne imeda ja piimaga klistiiri teha",
          img:
            "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
        },
        {
          firstName: "Maiu",
          lastName: "Piimaauto",
          age: "45",
          rating: 3.5,
          description:
            "tere olen maiu ja mulle meelidb munne imeda ja piimaga klistiiri teha",
          img:
            "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
        },
        {
          firstName: "Maiu",
          lastName: "Piimaauto",
          age: "45",
          rating: 5,
          description:
            "tere olen maiu ja mulle meelidb munne imeda ja piimaga klistiiri teha",
          img:
            "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
        },
        {
          firstName: "Maiu",
          lastName: "Piimaauto",
          age: "45",
          rating: 4,
          description:
            "tere olen maiu ja mulle meelidb munne imeda ja piimaga klistiiri teha",
          img:
            "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
        },
        {
          firstName: "Maiu",
          lastName: "Piimaauto",
          age: "45",
          rating: 2,
          description:
            "tere olen maiu ja mulle meelidb munne imeda ja piimaga klistiiri teha",
          img:
            "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
        },
        {
          firstName: "Maiu",
          lastName: "Piimaauto",
          age: "45",
          rating: 2.5,
          description:
            "tere olen maiu ja mulle meelidb munne imeda ja piimaga klistiiri teha",
          img:
            "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
        },
        {
          firstName: "Maiu",
          lastName: "Piimaauto",
          age: "45",
          rating: 1.5,
          description:
            "tere olen maiu ja mulle meelidb munne imeda ja piimaga klistiiri teha",
          img:
            "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
        },
        {
          firstName: "Maiu",
          lastName: "Piimaauto",
          age: "45",
          rating: 2.6,
          description:
            "tere olen maiu ja mulle meelidb munne imeda ja piimaga klistiiri teha",
          img:
            "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
.img-thumbnail {
  width: 8rem;
  height: 8rem;
}

.media:hover {
  cursor: pointer;
  transform: scale(1.003);
}
</style>
