<template>
  <div>
    <div class="p-1">
      <p class="h5 d-inline-block m-0 mr-2">Lapsehoidja:</p>
      <p class="lead d-inline-block m-0">{{booking.sitterName}}</p>
      <b-button variant="link" size="sm" class="p-0 ml-2 mb-2">
        <div class>Vaata profiili</div>
      </b-button>
    </div>
    <hr class="my-0">
    <div class="p-1">
      <p class="h6 d-inline-block m-0 mr-2">Asukoht:</p>
      <p
        class="lead d-inline-block m-0"
      >{{booking.address.street}} {{booking.address.houseNumber}}, {{booking.address.city}}, {{booking.address.county}}</p>
    </div>
    <div class="p-1">
      <p class="h6 d-inline-block m-0 mr-2">Alguse aeg:</p>
      <p class="lead d-inline-block m-0">{{formatDate(booking.startDate)}}</p>
    </div>
    <div class="p-1">
      <p class="h6 d-inline-block m-0 mr-2">Lõpu aeg:</p>
      <p class="lead d-inline-block m-0">{{formatDate(booking.endDate)}}</p>
    </div>
    <div class="p-1">
      <p class="h6 d-inline-block m-0 mr-2">Kestus:</p>
      <p class="lead d-inline-block m-0">{{hoursBetween(booking.startDate, new Date())}} tundi</p>
    </div>
    <div class="p-1">
      <p class="h6 d-inline-block m-0 mr-2">Päevi jäänud:</p>
      <p class="lead d-inline-block m-0">{{daysBetween(booking.startDate, booking.endDate)}} päeva</p>
    </div>
    <hr class="my-0">
    <div class="p-1">
      <p class="h6 d-inline-block m-0 mr-2">Staatus:</p>
      <p class="lead d-inline-block m-0">{{booking.status}}</p>
    </div>

    <div v-if="booking.status == 'Maksmata'">
      <p
        class="small text-secondary"
      >Et lapsehoidja saaks broneeringu üle vaadata, peate selle eest kõigepealt maksma</p>
      <p class="h5">Maksmine</p>
      <hr class="my-2">
      <b-form-group
        label="Millisest pangast soovite ülekannet teha?"
        label-for="bank-radio"
        label-cols-sm="4"
        label-cols-lg="3"
      >
        <b-form-radio-group
          id="bank-radio"
          v-model="bankSelected"
          :options="bankOptions"
          buttons
          button-variant="outline-primary"
          size="lg"
          name="radio-btn-outline"
          class="pt-2 pl-4"
          required
        ></b-form-radio-group>
      </b-form-group>
      <b-form-checkbox
        required
        class="mb-2"
        id="agreement"
        v-model="agreementStatus"
        name="terms-and-conditions-agreement"
        value="accepted"
        unchecked-value="not_accepted"
      >Olen läbi lugenud ja nõustun Lapsehoidja.ee tingimustega</b-form-checkbox>

      <b-button block variant="primary">Maksma</b-button>
    </div>
    <div v-if="booking.status == 'Kinnitamata'">
      <p
        class="small text-secondary"
      >Broneeringu eest on makstud, kuid lapsehoidja ei ole seda veel kinnitanud</p>
    </div>
    <div v-if="booking.status == 'Valmis'">
      <p
        class="small text-secondary"
      >Broneering on kinnitatud ja lapsehoidja tuleb nõutud ajal kohale</p>
    </div>
    <div v-if="booking.status == 'Lõppenud'">
      <p class="small text-secondary">Broneering on edukalt lõppenud</p>
      <p>Hinnangu andmine läheb siia</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookingInfo",
  props: {
    bookingId: {
      type: Number,
      default: 0
    }
  },
  methods: {
    hoursBetween(date1, date2) {
      var oneHour = 1000 * 60 * 60;
      return Math.round((date2.getTime() - date1.getTime()) / oneHour);
    },
    daysBetween(date1, date2) {
      var oneDay = 1000 * 60 * 60 * 24;
      return Math.round((date2.getTime() - date1.getTime()) / oneDay);
    },
    formatDate(date) {
      return date.toLocaleDateString(navigator.language, this.dateOptions);
    }
  },
  data() {
    return {
      booking: {
        sitterName: "Mari Juurikas",
        startDate: new Date(),
        endDate: new Date(),
        address: {
          county: "Harjumaa",
          city: "Tallinn",
          street: "Tina",
          houseNumber: "13"
        },
        status: "Maksmata"
      },
      bankOptions: [
        { value: "swedbank", text: "SwedBank" },
        { value: "lhv", text: "LHV" },
        { valuse: "seb", text: "SEB" }
      ],
      bankSelected: null,
      agreementStatus: "not_accepted",
      dateOptions: {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      }
    };
  }
};
</script>
