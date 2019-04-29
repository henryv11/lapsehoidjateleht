<template>
  <div>
    <b-table
      hover
      small
      stacked="md"
      striped
      bordeless
      fixed
      outlined
      class="shadow-sm round"
      :dark="dark"
      :items="bookings"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
      :filter="filter"
      @filtered="onFiltered"
    >
      <template slot="startDate" slot-scope="row">
        <p class="small">{{formatDate(row.item.startDate)}}</p>
      </template>
      <template slot="endDate" slot-scope="row">
        <p class="small">{{formatDate(row.item.endDate)}}</p>
      </template>
      <template slot="actions" slot-scope="row">
        <b-button
          block
          size="sm"
          variant="link"
          :class="dark ? 'text-light' : 'text-primary'"
          @click="info(row.item)"
        >Vaata rohkem</b-button>
      </template>
    </b-table>
    <b-pagination
      v-if="rows > perPage"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      size="sm"
      align="center"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  name: "BookingTable",
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    filterProp: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.rows = this.bookings.length;
    this.filter = this.filterProp;
  },
  methods: {
    info(item) {
      this.$emit("showInfo", item.id);
    },
    onFiltered(filteredItems) {
      this.rows = filteredItems.length;
      this.currentPage = 1;
    },
    formatDate(date) {
      return date.toLocaleDateString(navigator.language, this.dateOptions);
    }
  },
  data: function() {
    return {
      perPage: 5,
      currentPage: 1,
      rows: 1,
      filter: "",
      dateOptions: {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      },
      infoModal: {
        id: "info-modal",
        title: "",
        content: ""
      },
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
        },
        actions: {
          label: "Tegevused",
          sortable: false
        }
      },
      bookings: [
        {
          id: 1,
          sitter: "Eesnimi Perenimi",
          startDate: new Date(),
          endDate: new Date(),
          status: "Kinnitamata"
        },
        {
          id: 2,
          sitter: "Eesnimi Perenimi",
          startDate: new Date(),
          endDate: new Date(),
          status: "Valmis"
        },
        {
          id: 3,
          sitter: "Eesnimi Perenimi",
          startDate: new Date(),
          endDate: new Date(),
          status: "Kinnitamata"
        },
        {
          id: 4,
          sitter: "Eesnimi Perenimi",
          startDate: new Date(),
          endDate: new Date(),
          status: "Kinnitamata"
        },
        {
          id: 5,
          sitter: "Eesnimi Perenimi",
          startDate: new Date(),
          endDate: new Date(),
          status: "Kinnitamata"
        },
        {
          id: 6,
          sitter: "Eesnimi Perenimi",
          startDate: new Date(),
          endDate: new Date(),
          status: "Maksmata"
        },
        {
          id: 7,
          sitter: "Eesnimi Perenimi",
          startDate: new Date(),
          endDate: new Date(),
          status: "Kinnitamata"
        },
        {
          id: 8,
          sitter: "Eesnimi Perenimi",
          startDate: new Date(),
          endDate: new Date(),
          status: "Lõppenud"
        },
        {
          id: 9,
          sitter: "Eesnimi Perenimi",
          startDate: new Date(),
          endDate: new Date(),
          status: "Lõppenud"
        },
        {
          id: 10,
          sitter: "Eesnimi Perenimi",
          startDate: new Date(),
          endDate: new Date(),
          status: "Lõppenud"
        },
        {
          id: 11,
          sitter: "Eesnimi Perenimi",
          startDate: new Date(),
          endDate: new Date(),
          status: "Lõppenud"
        },
        {
          id: 12,
          sitter: "Eesnimi Perenimi",
          startDate: new Date(),
          endDate: new Date(),
          status: "Lõppenud"
        },
        {
          id: 13,
          sitter: "Eesnimi Perenimi",
          startDate: new Date(),
          endDate: new Date(),
          status: "Lõppenud"
        },
        {
          id: 14,
          sitter: "Eesnimi Perenimi",
          startDate: new Date(),
          endDate: new Date(),
          status: "Lõppenud"
        }
      ]
    };
  }
};
</script>


