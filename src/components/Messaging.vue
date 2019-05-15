<template>
  <div class="messaging-main-cointainer">
    <div class="p-2 m-0 bg-white border rounded shadow-sm">
      <b-button
        variant="link"
        class="text-dark p-0 m-0 ml-2"
        @click="sidebarActive = !sidebarActive"
        v-b-tooltip.hover
        :title="!sidebarActive ? 'Ava vestluste aken' : 'Sulge vestluste aken'"
      >
        <font-awesome-icon icon="comments"/>
      </b-button>
      <b-button
        v-if="selectedChat != 0"
        variant="link"
        class="text-dark p-0 m-0 mr-2 float-right"
        @click="selectedChat = 0"
        v-b-tooltip.hover
        :title="'Sulge vestlus'"
      >
        <font-awesome-icon icon="times"/>
      </b-button>
    </div>
    <div class="chat-window">
      <div
        class="chat-window m-0 bg-white rounded border shadow-sm"
        :class="sidebarActive ? 'make-opaque' : ''"
      >
        <ChatWindow :chatId="selectedChat" :key="selectedChat"/>
      </div>
      <div
        class="chats-sidebar-container"
        :class="sidebarActive ? 'chats-sidebar-container' : 'd-none'"
      >
        <div class="chats-container rounded border bg-white shadow-sm">
          <p class="lead p-3 m-0 text-primary d-inline-block">Sinu vestlused</p>
          <b-button
            variant="link"
            class="text-secondary p-0 m-3 float-right"
            @click="sidebarActive = false"
            v-b-tooltip.hover
            title="Sulge vestluste aken"
          >
            <font-awesome-icon icon="times"/>
          </b-button>
          <hr class="my-0">
          <b-list-group flush class="p-2 chats flex-column align-items-start">
            <b-list-group-item
              href="#"
              class="p-1 mb-1 rounded shadow-sm border"
              v-for="chat in chats"
              :key="chat.chatId"
              :class="isSelected(chat.chatId) ? 'bg-secondary' : 'bg-light'"
              v-on:click="selectedChat = chat.chatId; sidebarActive = false"
            >
              <b-media vertical-align="center ml-2">
                <b-img
                  slot="aside"
                  class="rounded-circle"
                  blank
                  blank-color="#ccc"
                  width="50"
                  alt="placeholder"
                ></b-img>
                <div class="d-inline-block w-100">
                  <div
                    v-for="name in filterNames(chat.participants)"
                    :key="name"
                    class="float-left d-inline m-0"
                  >
                    <p class="lead text-warning m-0 p-0">{{name}}</p>
                  </div>
                </div>
                <hr class="my-0">
                <div
                  class="d-inline-block w-100 p-1"
                  :class="isSelected(chat.chatId) ? 'text-white' : 'text-secondary'"
                >
                  <div class="small float-left w-75 last-message">{{chat.lastMessage}}</div>
                  <div class="small float-right">{{formatDate(chat.lastMessageTime)}}</div>
                </div>
              </b-media>
            </b-list-group-item>
          </b-list-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatWindow from "@/components/ChatWindow.vue";

export default {
  name: "Messaging",
  components: {
    ChatWindow
  },
  methods: {
    filterNames: function(names) {
      return names.filter(name => {
        return name != this.userName;
      });
    },
    formatDate: function(time) {
      let date = new Date(time);
      let secondsFromNow = Math.round((new Date().getTime() - time) / 1000);
      if (secondsFromNow < 60) {
        return secondsFromNow + " sec";
      } else if (secondsFromNow < 3600) {
        return Math.round(secondsFromNow / 60) + " min";
      } else if (secondsFromNow < 86400) {
        return date.toLocaleTimeString(navigator.language, {
          minute: "2-digit",
          hour: "2-digit"
        });
      } else if (secondsFromNow < 604800) {
        return date.toLocaleString(navigator.language, { weekday: "long" });
      } else if (secondsFromNow < 3143600) {
        return date.toLocaleString(navigator.language, {
          month: "long",
          day: "numeric"
        });
      } else {
        return date.toLocaleString(navigator.language, {
          day: "numeric",
          month: "numeric",
          year: "numeric"
        });
      }
    },
    isSelected: function(id) {
      return id == this.selectedChat;
    }
  },
  data: function() {
    return {
      userName: "Ivan Jüri",
      selectedChat: 0,
      sidebarActive: true,
      chats: [
        {
          chatId: 1,
          participants: ["Ivan Jüri", "Mari Juurikas"],
          lastMessage: "Tsau, lapsi viitsid hoida v",
          lastMessageTime: new Date().getTime()
        },
        {
          chatId: 2,
          participants: ["Ivan Jüri", "Laura Saun"],
          lastMessage: "ok",
          lastMessageTime: 1555525235346
        },
        {
          chatId: 3,
          participants: ["Ivan Jüri", "Ilja Ilin"],
          lastMessage: "dvjj",
          lastMessageTime: 1552955234346
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.last-message {
  height: 1rem;
  overflow: hidden !important;
}

.chat-window {
  height: 48rem;
  position: relative;
}

.messaging-main-container {
  position: relative;
}

.chats-sidebar-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.make-opaque {
  opacity: 0.3;
}

.chats {
  height: 90%;
  overflow-y: auto;
}

.chats-container {
  width: 20rem;
  height: 100%;
}
</style>