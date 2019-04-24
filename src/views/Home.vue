<template>
  <div class="bg-image container-fluid">
    <div class="row">
      <div class="col-xl-6 col-lg-7 col-md-8 col-sm-12">
        <div class="jumbotron m-5 bg-light shadow-lg" id="opaque-jumbotron">
          <div class="container">
            <h1 class="display-4">Leidke hoidja oma lapsele või loomale</h1>
            <p class="lead">Ulatuslik valik kogenenud lapsehoidjad igas Eestimaa linnas</p>
            <hr class="my-2">
            <div class="p-2">
              <router-link
                class="float-right btn btn-primary"
                :to="{ name: 'browse'}"
              >Tutvuge valikuga</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="less" sc>
.bg-image {
  background-image: url("https://images.pexels.com/photos/1741231/pexels-photo-1741231.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 40rem;
  height: 85vh;
  opacity: 0.8;
  filter: alpha(opacity=80);
}

#opaque-jumbotron {
  background: rgb(255, 255, 255) !important;
  background: rgba(255, 255, 255, 0.7) !important;
}
</style>

