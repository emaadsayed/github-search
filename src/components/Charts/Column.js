import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Column = ({ data }) => {
  const chartConfigs = {
    type: "column2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Popular",
        yAxisName: "Stars",
        yAxisNameFontSize: 16,
        xAxisName: "Repos",
        xAxisNameFontSize: 16,
        paletteColors: "#5d62b5, #29c3be, #f2726f, #ffc533, #62b58f",
        theme: "candy",
      },
      data: data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Column;
