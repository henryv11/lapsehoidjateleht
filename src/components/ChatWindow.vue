<template>
  <div>
    <div class="messages mb-1 container-fluid">
      <b-list-group flush>
        <b-list-group-item v-for="(message, index) in messages" :key="index" class="border-0 p-1">
          <div>
            <p
              class="h6 m-0"
              v-if="nameStates[index]"
              :class="message.senderName == userName ? 'float-left ml-2' : 'float-right mr-2'"
            >{{message.senderName}}</p>
            <div class="d-inline-block">
              <div
                class="bubble"
                :class="message.senderName == userName ? 'me' : 'you'"
              >{{message.content}}</div>
            </div>
            <p
              class="small d-inline-block m-0 text-muted"
              :class="message.senderName == userName ? 'float-left ml-4' : 'float-right mr-4'"
            >{{formatDate(message.date)}}</p>
          </div>
        </b-list-group-item>
      </b-list-group>
    </div>
    <div>
      <b-form inline>
        <b-form-input id="chat-input" class="mr-1 d-inline-block"></b-form-input>
        <b-button variant="link" class="text-dark send-button">
          <font-awesome-icon icon="paper-plane"/>
        </b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatWindow",
  methods: {
    scrollToEnd() {
      var container = this.$el.querySelector(".messages");
      container.scrollTop = container.scrollHeight;
    },
    formatDate: function(time) {
      let date = new Date(time);
      let secondsFromNow = Math.round((new Date().getTime() - time) / 1000);
      if (secondsFromNow < 60) {
        return secondsFromNow + " seconds ago";
      } else if (secondsFromNow < 3600) {
        return Math.round(secondsFromNow / 60) + " minutes ago";
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
    }
  },
  data: function() {
    return {
      userName: "Peeter Eeter",
      messages: [
        {
          senderName: "Peeter Eeter",
          date: new Date().getTime(),
          content:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis."
        },
        {
          senderName: "Viktoria Munsus",
          date: new Date().getTime(),
          content:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis."
        },
        {
          senderName: "Viktoria Munsus",
          date: new Date().getTime(),
          content:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis."
        },
        {
          senderName: "Viktoria Munsus",
          date: new Date().getTime(),
          content:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis."
        },
        {
          senderName: "Peeter Eeter",
          date: new Date().getTime(),
          content:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis."
        },
        {
          senderName: "Viktoria Munsus",
          date: new Date().getTime(),
          content:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis."
        },
        {
          senderName: "Viktoria Munsus",
          date: new Date().getTime(),
          content:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis."
        },
        {
          senderName: "Viktoria Munsus",
          date: new Date().getTime(),
          content:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis."
        }
      ]
    };
  },
  computed: {
    nameStates() {
      var nameStates = [];
      var lastSender = "";
      for (var i = 0; i < this.messages.length; i++) {
        if (this.messages[i].senderName == lastSender) {
          nameStates[i] = false;
        } else {
          nameStates[i] = true;
        }
        lastSender = this.messages[i].senderName;
      }
      return nameStates;
    }
  }
};
</script>

<style lang="less" scoped>
.messages {
  overflow-y: auto;
  max-height: 75vh;
  min-height: 75vh;
}

.send-button {
  width: 3rem;
}

#chat-input {
  width: calc(100% - 3.3rem);
}

.bubble {
  background-color: #f2f2f2;
  border-radius: 0.5rem;
  box-shadow: 0 0 6px #b2b2b2;
  display: inline-block;
  padding: 1rem 1rem;
  position: relative;
  vertical-align: top;
  max-width: 80%;
}

.bubble::before {
  background-color: #f2f2f2;
  content: "\00a0";
  display: block;
  height: 16px;
  position: absolute;
  top: 11px;
  transform: rotate(29deg) skew(-35deg);
  -moz-transform: rotate(29deg) skew(-35deg);
  -ms-transform: rotate(29deg) skew(-35deg);
  -o-transform: rotate(29deg) skew(-35deg);
  -webkit-transform: rotate(29deg) skew(-35deg);
  width: 20px;
}

.me {
  float: left;
  margin: 5px 45px 5px 20px;
}

.me::before {
  box-shadow: -2px 2px 2px 0 rgba(178, 178, 178, 0.4);
  left: -9px;
}

.you {
  float: right;
  margin: 5px 20px 5px 45px;
}

.you::before {
  box-shadow: 2px -2px 2px 0 rgba(178, 178, 178, 0.4);
  right: -9px;
}
</style>