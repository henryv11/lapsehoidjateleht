<template>
  <div
    class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white shadow-sm sticky-top"
  >
    <h5 class="my-0 mr-md-auto font-weight-normal">Lapsehoidja.ee</h5>
    <nav class="my-2 my-md-0 mr-md-3">
      <router-link class="p-2 text-dark" :to="{ name: 'profile'}">Profile</router-link>
      <router-link class="p-2 text-dark" :to="{ name: 'browse'}">Browse</router-link>
      <router-link class="p-2 text-dark" :to="{ name: 'home'}">Home</router-link>
      <router-link class="p-2 text-dark" :to="{ name: 'dashboard'}">Dashboard</router-link>
    </nav>
    <a class="btn btn-outline-primary" href="#">Sign up</a>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
