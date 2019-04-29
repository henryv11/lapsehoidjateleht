<template>
  <div class="main bg-white mt-0">
    <Pagination/>

    <ul class="list-unstyled">
      <li v-for="(sitter, index) in sitters" :key="index" class="m-1">
        <b-card body-class="p-0 m-0 shadow-sm">
          <b-media>
            <b-img slot="aside" :src="sitter.img" alt="placeholder" class="m-2 shadow-sm rounded-circle border"></b-img>
            <div class="comment-header pt-2">
              <p
                class="h5 m-0 d-inline-block"
              >{{sitter.firstName}} {{sitter.lastName}}, {{sitter.age}}</p>
              <div class="float-right mr-2">
                <Rating :rating="sitter.rating" :id="'feed-sitter' + index" :size="'sm'"/>
              </div>
            </div>
            <hr class="my-0">
            <p class="lead d-block text-secondary mr-2 description">{{sitter.description}}</p>
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
            "tere olen maiu ja mulle sadfgggggg gpdhsapg hweaipsgfipZ XBcvi pbSAIEfgIABN FvoBAIP FvSABFcahnso fjnwabfgisdbfvno[dngo;dsbivbips dbvfipebmeelidb munne imeda ja piimaga klistiiri teha",
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
