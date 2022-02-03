import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  CustomLineChart,
  SimpleAreaChart,
  StackedAreaChart,
  SimpleBarChart,
  PositiveAndNegativeBarChart,
  LineBarAreaComposedChart,
  SimpleScatterChart,
  PieChartWithCustomizedLabel,
} from "./components/charts";
import { Card } from "./components/common";

function App() {
  return (
    <div className="App">
      <div className="App-title">Recharts Examples</div>
      <Card title="LineChart">
        <CustomLineChart />
      </Card>

      <Card title="SimpleAreaChart">
        <SimpleAreaChart />
      </Card>

      <Card title="StackedAreaChart">
        <StackedAreaChart />
      </Card>

      <Card title="TinyBarChart">
        <SimpleBarChart />
      </Card>

      <Card title="PositiveAndNegativeBarChart">
        <PositiveAndNegativeBarChart />
      </Card>

      <Card title="LineBarAreaComposedChart">
        <LineBarAreaComposedChart />
      </Card>

      <Card title="SimpleScatterChart">
        <SimpleScatterChart />
      </Card>

      <Card title="PieChartWithCustomizedLabel">
        <PieChartWithCustomizedLabel />
      </Card>
    </div>
  );
}

export default App;
