<template>
  <div class="container mt-2">
    <b-tabs v-model="tabIndex" pills small>
      <b-tab title="Sõnumid" class="p-2">
        <Messaging/>
      </b-tab>
      <b-tab title="Broneeringud" class="p-2"><Bookings/></b-tab>
      <b-tab title="Seaded" class="p-2"><Settings/></b-tab>
      <b-tab title="Lapsehoidja seaded" disabled>Sibzamini!</b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Messaging from "@/components/Messaging.vue";
import Settings from "@/components/Settings.vue";
import Bookings from "@/components/Bookings.vue";

export default {
  name: "Dashboard",
  components: {
    Messaging,
    Settings,
    Bookings
  },
  data: function() {
    return {
      tabIndex: 0
    };
  }
};
</script>

<style lang="less" scoped>
.tab-focus() {
  outline: 0;
}

@media (max-width: 1200px) {
  .container {
    width: 100%;
    max-width: none;
  }
}
</style>


