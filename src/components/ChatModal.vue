<template>
  <b-modal
    v-model="showModal"
    hide-footer
    id="chat-modal"
    title="Vestlus"
    size="lg"
    body-class="p-0 pt-2 pb-2"
  >
    <b-container fluid>
      <ChatWindow ref="chat-window"/>
    </b-container>
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
    }
  }
};
</script>

<style lang="less" scoped>
</style>


