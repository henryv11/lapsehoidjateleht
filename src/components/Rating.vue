<template>
  <div class="rating-container" :id="id">
    <div>
      <font-awesome-icon v-for="index in fullStars" :key="index" icon="star" :class="'fa-'+size"/>
      <font-awesome-icon v-if="halfStars > 0.1 && halfStars < 0.9" icon="star-half" :class="'fa-'+size"/>
      <font-awesome-icon v-else-if="halfStars >= 0.9" icon="star" :class="'fa-'+size"/>
    </div>
    <b-popover
      :target="id"
      :placement="'top'"
      title="Hinnang"
      triggers="hover"
      :content="this.rating.toString()"
    ></b-popover>
  </div>
</template>

<script>
export default {
  name: "Rating",
  props: { rating: Number, id: String, size: String },
  data: function() {
    return {
      fullStars: Math.floor(this.rating),
      halfStars: this.rating - Math.floor(this.rating)
    };
  }
};
</script>

<style lang="less" scoped>
.rating-container {
  display: inline-block;
}
</style>


