<template>
  <div>
    <b-modal ref="info-modal" hide-footer title="Using Component Methods">
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>
      </div>
    </b-modal>
    <p class="h1 display-4 m-0">Eelolevad broneeringud</p>
    <hr class="my-2">
    <p class="h5">Valmis broneeringud</p>
    <hr class="my-2">
    <BookingTable @showInfo="openModal" :filterProp="'valmis'"/>
    <p class="h5">Kinnitamata broneeringud</p>
    <hr class="my-2">
    <BookingTable @showInfo="openModal" :filterProp="'kinnitamata'"/>
    <p class="h5">Maksmata broneeringud</p>
    <hr class="my-2">
    <BookingTable @showInfo="openModal" :filterProp="'maksmata'"/>
    <p class="h1 display-4 m-0">Mõõdunud broneeringud</p>
    <hr class="my-2">
    <BookingTable @showInfo="openModal" :dark="true" :filterProp="'lõppenud'"/>
  </div>
</template>

<script>
import BookingTable from "@/components/BookingTable.vue";

export default {
  name: "Bookings",
  computed: {},
  components: {
    BookingTable
  },
  methods: {
    openModal: function(bookingId) {
      this.bookingId = bookingId;
      this.$refs["info-modal"].show();
    }
  },
  data: function() {
    return {
      bookingId: 0
    };
  }
};
</script>

