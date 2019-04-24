<template>
  <b-container fluid class="mt-2">
    <b-card no-body>
      <b-tabs v-model="tabIndex" card>
        <b-tab title="Sõnumid" class="p-0">
          <b-container fluid>
            <Messaging/>
          </b-container>
        </b-tab>
        <b-tab title="Seaded">
          I'm the second tab
          <b-card>I'm the card in tab</b-card>
        </b-tab>
        <b-tab title="Lapsehoidja seaded" disabled>Sibzamini!</b-tab>
      </b-tabs>
    </b-card>
  </b-container>
</template>

<script>
import Messaging from "@/components/Messaging.vue";

export default {
  name: "Dashboard",
  components: {
    Messaging
  }
};
</script>

