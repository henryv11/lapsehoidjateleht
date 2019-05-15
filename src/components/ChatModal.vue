<template>
  <b-modal v-model="showModal" hide-footer id="chat-modal" size="lg" body-class="p-0 pb-2">
    <template slot="modal-header">
      <p class="h5 m-0">
        {{sitterName}} - Vestlus
        <b-button
          class="mb-1 text-dark"
          variant="link"
          @click="goToChat"
          v-b-tooltip.hover
          :title="'Ava vestluste leht'"
        >
          <font-awesome-icon icon="comments"/>
        </b-button>
      </p>

      <b-button
        variant="link"
        class="text-secondary p-0 m-0 mr-2 float-right"
        @click="hide"
        v-b-tooltip.hover
        title="Sulge vestluste aken"
      >
        <font-awesome-icon icon="times"/>
      </b-button>
    </template>
    <ChatWindow ref="chat-window" :sitterName="sitterName" :sitterId="sitterId"/>
  </b-modal>
</template>

<script>
import ChatWindow from "@/components/ChatWindow.vue";
import { setTimeout } from "timers";

export default {
  name: "ChatModal",
  components: {
    ChatWindow
  },
  props: {
    sitterId: {
      type: Number,
      default: 0
    },
    sitterName: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    show() {
      this.showModal = true;
      setTimeout(() => {
        this.$refs["chat-window"].scrollToEnd();
      }, 100);
    },
    hide() {
      this.showModal = false;
    },
    goToChat() {
      this.$router.push({ name: "dashboard", params: { openTab: 0 } });
    }
  }
};
</script>

<style lang="less" scoped>
</style>


