<template>
  <div>
    <b-row>
      <b-col cols="4" class="p-1">
        <b-list-group flush class="p-2 chats flex-column align-items-start">
          <b-list-group-item
            href="#"
            class="p-1 mb-2 text-dark rounded shadow-sm border-0"
            v-for="chat in chats"
            :key="chat.chatId"
            :active="isSelected(chat.chatId)"
            v-on:click="selectedChat = chat.chatId"
          >
            <b-media vertical-align="center p-0">
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
                  class="float-left d-inline h6 m-0"
                >{{name}}</div>
              </div>
              <div class="d-inline-block w-100">
                <div class="small float-left last-message">{{chat.lastMessage}}</div>
                <div class="small float-right">{{formatDate(chat.lastMessageTime)}}</div>
              </div>
            </b-media>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col cols="8" class="p-1">
        <ChatWindow/>
      </b-col>
    </b-row>
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
      selectedChat: Number,
      chats: [
        {
          chatId: 1,
          participants: ["Mirgel Mürgel", "Tatjana Sljuhh"],
          lastMessage: "Tule v6ta suhu litssg sdgasdg",
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
.chats {
  overflow-y: auto;
  max-height: calc(75vh + 3rem);
  min-height: calc(75vh + 3rem);
}

.last-message {
  max-width: 60%;
  overflow: hidden !important;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>


