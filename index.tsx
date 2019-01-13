import React from "react";
import { render } from "react-dom";
import { ResponsiveHeatMapCanvas } from "@nivo/heatmap";
import { food } from "./data/food";
import { people } from "./data/people";
import { ResponsiveSankey } from "@nivo/sankey";
import styled from "@emotion/styled";

const Wrapper = styled.div({
    height: "800px",
});

const App = () => (
    <Wrapper>
        <ResponsiveHeatMapCanvas data={food}
            keys={[
                "hot dog",
                "burger",
                "sandwich",
                "kebab",
                "fries",
                "donut",
                "junk",
                "sushi",
                "ramen",
                "curry",
                "udon",
            ]}
            indexBy="country"
        />
        <ResponsiveSankey data={people} />
    </Wrapper>
);

render(<App />, document.getElementById("app"));
