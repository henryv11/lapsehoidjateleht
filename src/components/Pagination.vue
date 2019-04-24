<template>
  <div class="overflow-auto">
    <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" size="sm" align="fill" use-router></b-pagination-nav>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    methods: {
      linkGen(pageNum) {
        return pageNum === 1 ? '?' : `?page=${pageNum}`
      }
    }
  }
</script>