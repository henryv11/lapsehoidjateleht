<template>
  <div ref="chartdiv" class="chart-container border shadow-sm"></div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default {
  name: "VisitorsChart",
  mounted() {
    let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);

    chart.paddingRight = am4core.percent(4);

    let data = [];
    let visits;
    let previousValue;
    let currentDate = new Date();
    let counter = 0;

    for (let i = 365; i >= 0; i--) {
      visits = Math.floor(Math.random() * (10000 + 1));

      if (counter > 0) {
        // add color to previous data item depending on whether current value is less or more than previous value
        if (previousValue <= visits) {
          data[counter - 1].color = chart.colors.getIndex(0);
        } else {
          data[counter - 1].color = chart.colors.getIndex(5);
        }
      }

      data.push({
        date: new Date(currentDate.getTime() - i * 24 * 60 * 60 * 1000),
        value: visits
      });
      previousValue = visits;
      counter++;
    }

    chart.data = data;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.axisFills.template.disabled = true;
    dateAxis.renderer.ticks.template.disabled = true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;
    valueAxis.renderer.axisFills.template.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.strokeWidth = 2;
    series.tooltipText =
      "külastajaid: {valueY}, muutus: {valueY.previousChange}";

    // set stroke property field
    series.propertyFields.stroke = "color";

    chart.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX = scrollbarX;

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
  height: 300px;
}
</style>
