<template>
  <b-modal
    v-model="showModal"
    hide-footer
    id="chat-modal"
    title="Vestlus"
    size="lg"
    body-class="p-0 pb-2"
  >
    <ChatWindow ref="chat-window" :chatId="1"/>
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


