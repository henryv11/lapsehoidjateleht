<template>
  <div class="container" v-if="!loading" :key="loading">
    <ChatModal
      ref="chat-modal"
      :sitterId="sitterId"
      :sitterName="sitter.firstName + ' ' + sitter.lastName"
    />
    <BookingModal ref="booking-modal"/>
    <CommentsModal :sitterId="sitterId" ref="comments-modal"/>
    <div class="row mt-1">
      <div class="col col-12 p-1">
        <div class="container-fluid rounded shadow-sm border bg-white p-0">
          <b-button variant="link" class="text-secondary" @click="goBack">
            <p class="small m-0">
              <font-awesome-icon icon="chevron-left" class="mr-1"/>Tagasi
            </p>
          </b-button>
        </div>
      </div>
      <div class="col col-12 col-md-4 col-xl-3 p-1">
        <div class="container-fluid shadow-sm border p-1 mb-3 bg-white">
          <div class="image mb-2 rounded m-1 shadow-sm">
            <img :src="sitter.imgUrl" class="img-fluid" alt="Responsive image">
          </div>
          <div class="name mb-2 text-center p-1">
            <p class="h4">{{sitter.firstName}} {{sitter.lastName}}</p>
            <hr class="my-2">
            <button
              type="button"
              class="btn btn-outline-primary btn-sm mr-1"
              use-router
              @click="openChat"
            >Saada sõnum</button>
            <button
              type="button"
              class="btn btn-outline-primary btn-sm"
              @click="openBooking"
            >Broneeri aeg</button>
          </div>
        </div>
      </div>
      <div class="col col-12 col-md-8 col-xl-9 p-1">
        <b-container fluid class="shadow-sm border p-1 mb-3 bg-white">
          <b-container fluid>
            <p class="h4 pt-2 pb-2">Kirjeldus</p>
            <b-list-group class="shadow-sm">
              <b-list-group-item>{{sitter.description}}</b-list-group-item>
            </b-list-group>
            <p class="h4 pt-2 pb-2">Isiklikud Andmed</p>
            <p>
              <b-list-group class="shadow-sm">
                <b-list-group-item>Sugu: {{sitter.sex}}</b-list-group-item>
                <b-list-group-item>Vanus: {{sitter.age}}</b-list-group-item>
              </b-list-group>
            </p>
            <p class="h4 pt-2 pb-2">Kontaktandmed</p>
            <p>
              <b-list-group class="shadow-sm">
                <b-list-group-item>Telefon: {{sitter.phone}}</b-list-group-item>
                <b-list-group-item>Email: {{sitter.email}}</b-list-group-item>
                <b-list-group-item>Maakond: {{sitter.state}}</b-list-group-item>
              </b-list-group>
            </p>
            <p class="h4 pt-2 pb-2">Kogemus Lapsehoidjana</p>
            <p>
              <b-list-group class="shadow-sm">
                <b-list-group-item>
                  Keskmine hinnang:
                  <Rating
                    :rating="sitter.rating"
                    :id="'sitter-rating-' + 'sitter.rating'"
                    :size="'sm'"
                  />
                </b-list-group-item>
                <b-list-group-item>Kogemus lapsehoidjana: {{sitter.experience}} aastat</b-list-group-item>
              </b-list-group>
            </p>

            <p class="h4 pt-2 pb-2">Teiste hinnangud</p>
            <Comments :limit="3" :pageable="false" :sitterId="sitterId"/>
            <b-button block variant="link" class="pt-0 pb-3" @click="openComments">Vaata rohkem</b-button>
          </b-container>
        </b-container>
      </div>
    </div>
  </div>
</template>


<script>
import ChatModal from "@/components/ChatModal.vue";
import BookingModal from "@/components/BookingModal.vue";
import Rating from "@/components/Rating.vue";
import Comments from "@/components/Comments.vue";
import CommentsModal from "@/components/CommentsModal.vue";

export default {
  name: "Profile",
  components: {
    ChatModal,
    BookingModal,
    Rating,
    Comments,
    CommentsModal
  },
  methods: {
    openChat() {
      this.$refs["chat-modal"].show();
    },
    openBooking() {
      this.$refs["booking-modal"].show();
    },
    openComments() {
      this.$refs["comments-modal"].show();
    },
    goBack() {
      this.$router.go(-1);
    },
    fetchSitter() {
      this.loading = true;
      this.axios({
        method: "get",
        url: "https://my.api.mockaroo.com/profile.json?key=6a5a1640"
      }).then(response => {
        this.sitter = response.data;
        this.loading = false;
      });
    }
  },
  props: {
    sitterId: {
      type: Number,
      required: true,
      default: 0
    }
  },
  mounted() {
    this.fetchSitter();
  },
  data: function() {
    return {
      sitter: null,
      loading: true
    };
  }
};
</script>

<style lang="less" scoped>
.list-group-item {
  padding: 0.5rem;
}

@media (max-width: 1200px) {
  .container {
    width: 100%;
    max-width: none;
  }
}
</style>

