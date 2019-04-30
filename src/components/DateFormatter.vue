<template>
  <div class="d-inline-block">{{formatDate(this.date)}}</div>
</template>

<script>
export default {
  name: "DateFormatter",
  props: {
    date: Date
  },
  data: function() {
    return {
      dateOptions: {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      }
    };
  },
  methods: {
    formatDate: function(date) {
      return date.toLocaleDateString(navigator.language, this.dateOptions);
    }
  }
};
</script>
