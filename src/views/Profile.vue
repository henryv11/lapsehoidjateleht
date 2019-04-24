<template>
  <div class="container-fluid">
    <ChatModal ref="chat-modal"/>
    <BookingModal ref="booking-modal"/>
    <CommentsModal ref="comments-modal"/>
    <div class="row mt-2">
      <div class="col-xl-3 col-lg-3 col-md-4">
        <div class="container-fluid shadow-sm p-1 mb-3 bg-white">
          <div class="image mb-2">
            <img :src="imgUrl" class="img-fluid" alt="Responsive image">
          </div>
          <div class="name mb-2 text-center">
            <p class="h4">{{name}}</p>
            <hr class="my-2">
            <button
              type="button"
              class="btn btn-outline-primary btn-sm mr-3"
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
      <div class="col-xl-6 col-lg-6 col-md-6">
        <b-container fluid class="shadow-sm p-1 mb-3 bg-white">
          <b-container fluid>
            <p class="h4 pt-2 pb-2">{{description.key}}</p>
            <ul class="list-group">
              <li class="list-group-item">{{description.value}}</li>
            </ul>
          </b-container>
          <div class v-for="(data, index) in data" :key="index">
            <b-container fluid>
              <p class="h4 pt-2 pb-2">{{data.key}}</p>
              <ul class="list-group">
                <li class="list-group-item" v-for="(value, index) in data.values" :key="index">
                  <div class="text-capitalize" v-if="value.key == 'Keskmine hinnang'">
                    <p class="text-capitalize d-inline mr-2 h6">{{value.key}}:</p>
                    <p class="d-inline">
                      <Rating :rating="value.value" :id="'sitter-rating'" :size="'sm'"/>
                    </p>
                  </div>
                  <div v-else>
                    <p class="text-capitalize d-inline mr-2 h6">{{value.key}}:</p>
                    <p class="d-inline">{{value.value}}</p>
                  </div>
                </li>
              </ul>
            </b-container>
          </div>
          <div class="container-fluid">
            <p class="h4 pt-2 pb-2">Teiste hinnangud</p>
            <Comments/>
            <b-button block variant="link" class="pt-0 pb-3" @click="openComments">Vaata rohkem</b-button>
          </div>
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
    }
  },
  data: function() {
    return {
      name: "Viktorija Munsus",
      imgUrl:
        "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-760x506.jpg",
      description: {
        key: "Kirjeldus",
        value:
          "Lorem ipsum dolor sit amet, te sea debet epicuri persecuti. Ut mel eruditi voluptaria. Putant scripserit ei quo, affert utinam mel ei, et enim cetero est. Labores blandit cu vis, te ubique feugait detracto sit. Primis fuisset laboramus vel an. Ei vim reque sonet consectetuer, ut has quem inciderint, his eu habemus eleifend partiendo"
      },
      data: [
        {
          key: "Isiklikud andmed",
          values: [{ key: "Vanus", value: 23 }, { key: "sugu", value: "Naine" }]
        },
        {
          key: "Kontaktandmed",
          values: [
            { key: "Telefon", value: "5252532" },
            { key: "Email", value: "zuka@bljad.com" },
            { key: "Asukoht", value: "Tallinn, Harjumaa" }
          ]
        },
        {
          key: "Kogemus",
          values: [
            { key: "Keskmine hinnang", value: 4.6 },
            { key: "Kogemus lapsehoidjana", value: "3 aastat" }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.list-group-item {
  padding: 0.5rem;
}
</style>

