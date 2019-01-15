import React from "react";
import { DropTarget, DropTargetCollector, DropTargetSpec } from "react-dnd";
import { ResponsiveHeatMapCanvas } from "@nivo/heatmap";
import { food } from "./data/food";
import styled from "@emotion/styled";

const Wrapper = styled.div({
    height: "400px",
    width: "400px",
});

const Types = {
    heatmap: "heatmap",
};

type Props = {
    id?: string;
};

type CollectedProps = {
    connectDropTarget: Function;
    didDrop: boolean;
};

const heatMapSource: DropTargetSpec<Props> = {
    drop({ id }) {
        return {
            id,
        };
    },
};

const heatMapCollect: DropTargetCollector<CollectedProps> = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        didDrop: monitor.didDrop(),
    };
};

const HeatMap: React.FC<Props & CollectedProps> = (props) => {
    console.log("heatmap", props);

    // TODO: randomize data upon dropping -> does this cause unneeded rendering?
    return props.connectDropTarget(
        <div>
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
            </Wrapper>
        </div>,
    );
};

export default DropTarget(Types.heatmap, heatMapSource, heatMapCollect)(HeatMap);
