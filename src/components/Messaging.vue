<template>
  <div class="messaging-main-cointainer">
    <div class="p-2 m-0 bg-white border rounded shadow">
      <b-button
        variant="link"
        class="text-dark p-0 m-0 ml-2"
        @click="sidebarActive = !sidebarActive"
        v-b-tooltip.hover
        :title="!sidebarActive ? 'Ava vestluste aken' : 'Sulge vestluste aken'"
      >
        <font-awesome-icon icon="comments"/>
      </b-button>
    </div>
    <div
      class="chat-window m-0 bg-white rounded border shadow"
      :class="sidebarActive ? 'make-opaque' : ''"
    >
      <ChatWindow :chatId="selectedChat" :key="selectedChat"/>
    </div>
    <div class="chats-sidebar-container" :class="sidebarActive ? '' : 'd-none'">
      <div class="chats-container rounded border bg-white shadow-lg">
        <p class="lead p-3 m-0 text-primary d-inline-block">Sinu vestlused</p>
        <b-button
          variant="link"
          class="text-secondary p-0 m-3 float-right"
          @click="sidebarActive = false"
          v-b-tooltip.hover
          title="Sulge vestluste aken"
        >
          <font-awesome-icon icon="window-close"/>
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
      userName: "Mirgel Mürgel",
      selectedChat: 0,
      sidebarActive: true,
      chats: [
        {
          chatId: 1,
          participants: ["Mirgel Mürgel", "Tatjana Sljuhh"],
          lastMessage:
            "Tule v6ta suhu litssg sdgasdg dsagd agdsa gdsa gasdgh afha sdgdsag dsag sdag asdg",
          lastMessageTime: new Date().getTime()
        },
        {
          chatId: 2,
          participants: ["Mirgel Mürgel", "Sauna Laura"],
          lastMessage: "Teeme sauna ka v",
          lastMessageTime: 1555525235346
        },
        {
          chatId: 3,
          participants: ["Mirgel Mürgel", "Sauna Laura"],
          lastMessage: "Teeme sauna ka v",
          lastMessageTime: 1552955234346
        },
        {
          chatId: 4,
          participants: ["Mirgel Mürgel", "Sauna Laura"],
          lastMessage: "Teeme sauna ka v",
          lastMessageTime: 1555955315170
        },
        {
          chatId: 5,
          participants: ["Mirgel Mürgel", "Sauna Laura"],
          lastMessage: "Teeme sauna ka v",
          lastMessageTime: new Date().getTime()
        },
        {
          chatId: 6,
          participants: ["Mirgel Mürgel", "Sauna Laura"],
          lastMessage: "Teeme sauna ka v",
          lastMessageTime: new Date().getTime()
        },
        {
          chatId: 7,
          participants: ["Mirgel Mürgel", "Sauna Laura"],
          lastMessage: "Teeme sauna ka v",
          lastMessageTime: new Date().getTime()
        },
        {
          chatId: 8,
          participants: ["Mirgel Mürgel", "Sauna Laura"],
          lastMessage: "Teeme sauna ka v",
          lastMessageTime: new Date().getTime()
        },
        {
          chatId: 9,
          participants: ["Mirgel Mürgel", "Tatjana Sljuhh"],
          lastMessage: "Tule v6ta suhu litssg sdgasdg",
          lastMessageTime: new Date().getTime()
        },
        {
          chatId: 10,
          participants: ["Mirgel Mürgel", "Sauna Laura"],
          lastMessage: "Teeme sauna ka v",
          lastMessageTime: 1555525235346
        },
        {
          chatId: 11,
          participants: ["Mirgel Mürgel", "Sauna Laura"],
          lastMessage: "Teeme sauna ka v",
          lastMessageTime: 1552955234346
        },
        {
          chatId: 12,
          participants: ["Mirgel Mürgel", "Sauna Laura"],
          lastMessage: "Teeme sauna ka v",
          lastMessageTime: 1555955315170
        },
        {
          chatId: 13,
          participants: ["Mirgel Mürgel", "Sauna Laura"],
          lastMessage: "Teeme sauna ka v",
          lastMessageTime: new Date().getTime()
        },
        {
          chatId: 14,
          participants: ["Mirgel Mürgel", "Sauna Laura"],
          lastMessage: "Teeme sauna ka v",
          lastMessageTime: new Date().getTime()
        },
        {
          chatId: 15,
          participants: ["Mirgel Mürgel", "Sauna Laura"],
          lastMessage: "Teeme sauna ka v",
          lastMessageTime: new Date().getTime()
        },
        {
          chatId: 16,
          participants: ["Mirgel Mürgel", "Sauna Laura"],
          lastMessage: "Teeme sauna ka v",
          lastMessageTime: new Date().getTime()
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
  //outline: 1px solid black;
}

.chats-sidebar-container {
  position: absolute;
  height: 47.8rem;
  width: 100%;
  //outline: 1px solid black;
}

.make-opaque {
  opacity: 0.3;
}

@media (min-width: 350px) {
  .chats-container {
    width: 90%;
  }
  .chats-sidebar-container {
    top: 14.35rem;
  }
}

@media (min-width: 767px) {
  .chats-container {
    width: 80%;
  }
  .chats-sidebar-container {
    top: 10.4rem;
  }
}

@media (min-width: 1000px) {
  .chats-container {
    width: 60%;
  }
}

@media (min-width: 1200px) {
  .chats-container {
    width: 40%;
  }
}

.chats {
  height: 44rem;
  overflow-y: auto;
}
</style>