<template>
  <div ref="chartdiv" class="chart-container border shadow-sm"></div>
</template>

<script>
import json from "@/data/sittersbycounty.json";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import am4geodata_estoniaHigh from "@amcharts/amcharts4-geodata/estoniaHigh";

am4core.useTheme(am4themes_animated);
export default {
  name: "SittersByCountyChart",
  methods: {
    fetchData() {
      return json;
    }
  },
  mounted() {
    let chart = am4core.create(this.$refs.chartdiv, am4maps.MapChart);

    chart.paddingRight = am4core.percent(5);
    chart.paddingLeft = am4core.percent(5);

    // Set map definition
    chart.geodata = am4geodata_estoniaHigh;

    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Create map polygon series
    let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    let color = 1;
    //Set min/max fill color for each area
    polygonSeries.heatRules.push({
      property: "fill",
      target: polygonSeries.mapPolygons.template,
      min: chart.colors.getIndex(color).brighten(1),
      max: chart.colors.getIndex(color).brighten(-0.3)
    });

    // Make map load polygon data (state shapes and names) from GeoJSON
    polygonSeries.useGeodata = true;

    // Set heatmap values for each state
    polygonSeries.data = this.fetchData();

    // Set up heat legend
    let heatLegend = chart.createChild(am4maps.HeatLegend);
    heatLegend.series = polygonSeries;
    heatLegend.align = "left";
    heatLegend.valign = "top";
    heatLegend.width = am4core.percent(20);
    heatLegend.marginTop = am4core.percent(4);
    heatLegend.minValue = 0;
    heatLegend.maxValue = 1000;

    // Set up custom heat map legend labels using axis ranges
    let minRange = heatLegend.valueAxis.axisRanges.create();
    minRange.value = heatLegend.minValue;
    minRange.label.text = "0";
    let maxRange = heatLegend.valueAxis.axisRanges.create();
    maxRange.value = heatLegend.maxValue;
    maxRange.label.text = "1000";

    // Blank out internal heat legend value axis labels
    heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function(
      labelText
    ) {
      return "";
    });

    // Configure series tooltip
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}: {value}";
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;

    // Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#3c5bdc");

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
