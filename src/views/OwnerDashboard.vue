<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p class="h1 display-4">Külastajate graafik</p>
        <p class="small pl-2 m-0">Viimase kaheteist kuu külastajate arv kuupäevade kaupa</p>
        <hr class="my-1">
        <VisitorsChart/>
      </div>
    </div>
    <div class="row">
      <div class="col col-12 col-lg-6">
        <p class="h1 display-4">Lapsehoidjate graafik</p>
        <p class="small pl-2 m-0">Lapsehoidjate arv maakondade kaupa</p>
        <hr class="my-1">
        <SittersByCountyChart/>
      </div>
      <div class="col col-12 col-lg-6">
        <p class="h1 display-4">Broneeringute graafik</p>
        <p class="small pl-2 m-0">Broneeringute osakaal maakondade kaupa</p>
        <hr class="my-1">
        <OrdersByCountyChart/>
      </div>
    </div>
  </div>
</template>

<script>
import VisitorsChart from "@/components/VisitorsChart.vue";
import SittersByCountyChart from "@/components/SittersByCountyChart.vue";
import OrdersByCountyChart from "@/components/OrdersByCountyChart.vue";

export default {
  name: "OwnerDashboard",
  components: {
    VisitorsChart,
    SittersByCountyChart,
    OrdersByCountyChart
  }
};
</script>

<style lang="less" scoped>
@media (max-width: 1200px) {
  .container {
    width: 100%;
    max-width: none;
  }
}
</style>


