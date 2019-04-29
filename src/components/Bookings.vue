<template>
  <div class="overflow-auto">
    <p class="h3 m-0">Eelolevad broneeringud</p>
    <hr class="my-2">
    <b-table
      hover
      small
      class="border shadow"
      :items="bookings"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
      id="bookings-table"
    ></b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="bookings-table"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  name: "Bookings",
  computed: {
    rows() {
      return this.bookings.length;
    }
  },
  data: function() {
    return {
      perPage: 5,
      currentPage: 1,
      fields: {
        sitter: {
          label: "Lapsehoidja",
          sortable: true
        },
        startDate: {
          label: "Alguse aeg",
          sortable: true
        },
        endDate: {
          label: "Lõpu aeg",
          sortable: true
        },
        status: {
          label: "Staatus",
          sortable: true
        }
      },
      bookings: [
        {
          sitter: "Eesnimi Perenimi",
          startDate: new Date(),
          endDate: new Date(),
          status: "Kinnitamata"
        },
        {
          sitter: "Eesnimi Perenimi",
          startDate: new Date(),
          endDate: new Date(),
          status: "Valmis"
        },
        {
          sitter: "Eesnimi Perenimi",
          startDate: new Date(),
          endDate: new Date(),
          status: "Kinnitamata"
        },
        {
          sitter: "Eesnimi Perenimi",
          startDate: new Date(),
          endDate: new Date(),
          status: "Kinnitamata"
        },
        {
          sitter: "Eesnimi Perenimi",
          startDate: new Date(),
          endDate: new Date(),
          status: "Kinnitamata"
        },
        {
          sitter: "Eesnimi Perenimi",
          startDate: new Date(),
          endDate: new Date(),
          status: "Maksmata"
        },
        {
          sitter: "Eesnimi Perenimi",
          startDate: new Date(),
          endDate: new Date(),
          status: "Kinnitamata"
        }
      ]
    };
  }
};
</script>

