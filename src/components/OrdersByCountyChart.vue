<template>
  <div ref="chartdiv" class="chart-container border shadow-sm"></div>
</template>

<script>
import json from "@/data/ordersbycountry.json";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default {
  name: "OrdersByCountyChart",
  methods: {
    fetchData() {
      return json;
    }
  },
  mounted() {
    let chart = am4core.create(this.$refs.chartdiv, am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = this.fetchData();

    chart.innerRadius = am4core.percent(30);
    chart.depth = 120;
    chart.paddingRight = am4core.percent(30);
    chart.paddingLeft = am4core.percent(30);

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "orders";
    series.dataFields.depthValue = "orders";
    series.dataFields.category = "county";
    series.slices.template.cornerRadius = 5;
    series.colors.step = 3;

    this.chart = chart;
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
};
</script>

<style lang="less" scoped>
.chart-container {
  width: 100%;
  height: 400px;
}
</style>
