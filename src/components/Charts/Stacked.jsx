import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";
const Stacked = ({ width, height }) => {
  return (
    <ChartComponent
      id="charts"
      style={{ textAlign: "center" }}
      width={width}
      height={height}
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      tooltip={{ enable: true }}
      legendSettings={{ background: "white" }}
      chartArea={{ border: { width: 0 } }}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => {
          <SeriesDirective key={index} {...item} />;
        })}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
