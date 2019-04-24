<template>
  <b-modal
    v-model="showModal"
    scrollable
    hide-footer
    id="booking-modal"
    title="Broneeri aeg"
    size="lg"
    body-class="p-0 pt-2 pb-2"
  >
    <b-container fluid>
      <BookingForm/>
    </b-container>
  </b-modal>
</template>

<script>
import BookingForm from "@/components/BookingForm.vue";

export default {
  name: "BookingModal",
  components: {
    BookingForm
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    show() {
      this.showModal = true;
    },
    hide() {
      this.showModal = false;
    }
  }
};
</script>

<style lang="less" scoped>
</style>


