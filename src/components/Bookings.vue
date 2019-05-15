<template>
  <div>
    <b-modal ref="info-modal" ok-only title="Broneeringu detailid">
      <BookingInfo :bookingId="selectedBookingId" :key="selectedBookingId"/>
    </b-modal>
    <p class="h1 display-4 m-0">Eelolevad broneeringud</p>
    <hr class="my-0 mb-2">
    <b-form-group
      description="Valige millise staatuse alusel broneeringuid filtreerida"
      label="Vaata"
      label-for="filter"
    >
      <b-form-select id="filter" v-model="filter" :options="filterOptions" size="sm"></b-form-select>
    </b-form-group>
    <BookingTable @showInfo="openModal" :filterProp="filter" :key="filter"/>
    <p class="h1 display-4 m-0">Mõõdunud broneeringud</p>
    <hr class="my-0 mb-2">
    <BookingTable @showInfo="openModal" :dark="true" :filterProp="'lõppenud'"/>
  </div>
</template>

<script>
import BookingTable from "@/components/BookingTable.vue";
import BookingInfo from "@/components/BookingInfo.vue";

export default {
  name: "Bookings",
  computed: {},
  components: {
    BookingTable,
    BookingInfo
  },
  methods: {
    openModal: function(bookingId) {
      this.selectedBookingId = bookingId;
      this.$refs["info-modal"].show();
    }
  },
  data: function() {
    return {
      selectedBookingId: 0,
      filterOptions: [
        { value: null, text: "Kõiki broneeringuid" },
        { value: "valmis", text: "Valmis broneeringuid" },
        { value: "maksmata", text: "Maksmata broneeringuid" },
        { value: "kinnitamata", text: "Kinnitamata broneeringuid" }
      ],
      filter: null
    };
  }
};
</script>

