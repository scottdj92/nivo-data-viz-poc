import React from "react";
import { render } from "react-dom";
import HeatMapLegend from "./heatmap-legend";
import { DragDropContextProvider } from "react-dnd";
import HTML5BackEnd from "react-dnd-html5-backend";
import HeatMap from "./heatmap";

const App = () => (
    <DragDropContextProvider backend={HTML5BackEnd}>
        <HeatMap />
        <HeatMapLegend />
        {/* <ResponsiveSankey data={people} /> */}
    </DragDropContextProvider>
);

render(<App />, document.getElementById("app"));
