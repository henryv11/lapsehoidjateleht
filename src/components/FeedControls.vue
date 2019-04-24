<template>
  <div>
    <b-row class="p-2">
      <b-col cols="12" lg="7" class="p-0">
        <b-container fluid>
          <b-button variant="link" disabled>Järjesta:</b-button>
          <b-button
            variant="link"
            class="p-0"
            v-for="(option, index) in options"
            :key="index"
            v-on:click="toggle(option)"
          >
            <div class="d-inline-block">{{option.key}}</div>
            <div class="d-inline-block icon-container">
              <font-awesome-icon v-if="option.clicked && !option.desc" icon="caret-up"/>
              <font-awesome-icon v-else-if="option.clicked && option.desc" icon="caret-down"/>
            </div>
          </b-button>
        </b-container>
      </b-col>
      <b-col cols="12" lg="5" class="p-0">
        <b-container>
          <Pagination/>
        </b-container>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";

export default {
  name: "FeedControls",
  components: {
    Pagination
  },
  data: function() {
    return {
      options: [
        {
          key: "Populaarsus",
          clicked: false,
          desc: false
        },
        {
          key: "Hinnang",
          clicked: false,
          desc: false
        },
        {
          key: "Vanus",
          clicked: false,
          desc: false
        }
      ]
    };
  },
  methods: {
    toggle: function(option) {
      for (var i = 0; i < this.options.length; i++) {
        var o = this.options[i];
        if (o.key != option.key) {
          o.clicked = false;
          o.desc = false;
        }
      }
      if (!option.clicked) {
        option.clicked = true;
      } else if (option.clicked && !option.desc) {
        option.desc = true;
      } else if (option.clicked && option.desc) {
        option.clicked = false;
        option.desc = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.icon-container {
  width: 1rem;
  height: 1rem;
}
</style>


