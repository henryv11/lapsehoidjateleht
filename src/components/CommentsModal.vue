<template>
  <b-modal
    v-model="showModal"
    scrollable
    hide-footer
    id="comments-modal"
    title="Teiste hinnangud"
    size="lg"
    body-class="p-0 pt-2 pb-2"
  >
    <b-container fluid>
      <div class="mb-2">
        <b-list-group>
          <b-list-group-item v-for="rating in ratingReport" :key="rating.rating" class="p-0">
            <b-row class="p-1 pl-4 pr-4">
              <b-col cols="4" sm="3" md="3" lg="2" class="p-0">
                <Rating :rating="rating.rating" :size="'sm'" :id="rating.rating + '-star-ratings'"/>
              </b-col>
              <b-col cols="5" sm="7" md="7" lg="9" class="p-0">
                <b-progress :value="percentages[rating.rating]" :max="100" class="mt-1"></b-progress>
              </b-col>
              <b-col cols="3" sm="2" md="2" lg="1" class="p-0 pl-3">
                <b-badge variant="primary" pill class="mt-1 w-100">{{percentages[rating.rating]}}%</b-badge>
              </b-col>
            </b-row>
          </b-list-group-item>
        </b-list-group>
      </div>
      <Comments/>
    </b-container>
  </b-modal>
</template>

<script>
import Comments from "@/components/Comments.vue";
import Rating from "@/components/Rating.vue";

export default {
  name: "CommentsModal",
  components: {
    Comments,
    Rating
  },
  data() {
    return {
      showModal: false,
      max: 50,
      ratingReport: [
        { rating: 5, count: 100 },
        { rating: 4, count: 200 },
        { rating: 3, count: 300 },
        { rating: 2, count: 400 },
        { rating: 1, count: 500 }
      ]
    };
  },
  methods: {
    show() {
      this.showModal = true;
    },
    hide() {
      this.showModal = false;
    }
  },
  computed: {
    percentages() {
      var totalRatings = 0;
      var percentages = [];
      for (let i = 0; i < this.ratingReport.length; i++) {
        totalRatings += this.ratingReport[i].count;
      }

      for (let i = 0; i < this.ratingReport.length; i++) {
        var rating = this.ratingReport[i];
        percentages[rating.rating] = Math.round(
          (rating.count * 100) / totalRatings
        );
        //percentages[rating.rating] = +(
        //  Math.round((rating.count * 100) / totalRatings + "e+2") + "e-2"
        //);
      }
      return percentages;
    }
  }
};
</script>
