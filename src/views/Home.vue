<template>
  <div class="bg-image mb-5">
    <div class="jumbotron p-5 bg-light rounded-0" id="opaque">
      <h1 class="display-4">Leidke hoidja oma lapsele või loomale</h1>
      <p class="lead">Ulatuslik valik kogenenud lapsehoidjad igas Eestimaa linnas</p>
      <hr class="my-2">
      <router-link class="float-right btn btn-primary" :to="{ name: 'browse'}">Vaadake lapsehoidjaid</router-link>
    </div>
  </div>
  <!--
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
              >Vaadake lapsehoidjaid</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  -->
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
  opacity: 0.8;
  filter: alpha(opacity=80);
}

#opaque {
  background: rgb(255, 255, 255) !important;
  background: rgba(255, 255, 255, 0.7) !important;
}

@media (max-width: 575px) {
  .bg-image {
    padding: 5rem 1rem 5rem 1rem;
  }
}

@media (min-width: 576px) {
  .bg-image {
    padding: 5rem 2rem 5rem 2rem;
  }
}

@media (min-width: 768px) {
  .bg-image {
    padding: 5rem 3rem 5rem 3rem;
  }
  .jumbotron {
    width: 90%;
  }
}

@media (min-width: 992px) {
  .bg-image {
    padding: 5rem;
  }
  .jumbotron {
    width: 70%;
  }
}

@media (min-width: 1200px) {
  .bg-image {
    padding: 5rem;
  }
  .jumbotron {
    width: 50%;
  }
}

</style>

