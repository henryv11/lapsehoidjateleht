<template>
  <div class="container mt-2">
    <b-tabs v-model="tabIndex" pills small>
      <b-tab title="Sõnumid" class="p-0 pt-2 border-0 bg-light">
        <b-container fluid>
          <Messaging/>
        </b-container>
      </b-tab>
      <b-tab title="Seaded">I'm the second tab</b-tab>
      <b-tab title="Lapsehoidja seaded" disabled>Sibzamini!</b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Messaging from "@/components/Messaging.vue";

export default {
  name: "Dashboard",
  components: {
    Messaging
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


