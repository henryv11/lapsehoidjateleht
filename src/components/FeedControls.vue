<template>
  <div>
    <b-button
      variant="link"
      block
      class="mb-2 p-1 text-primary"
      v-for="(option, index) in options"
      :key="index"
      :class="(option.clicked) ? 'shadow-sm border-primary' : ''"
      v-on:click="toggle(option)"
    >
      <div class="d-inline-block float-left">
        <p class="h6 m-0">{{option.key}}</p>
      </div>
      <div class="float-right icon-container mb-2">
        <font-awesome-icon v-if="option.clicked && !option.desc" icon="caret-up"/>
        <font-awesome-icon v-else-if="option.clicked && option.desc" icon="caret-down"/>
      </div>
    </b-button>
  </div>
</template>

<script>
export default {
  name: "FeedControls",
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
  height: 1rem;
}
</style>


