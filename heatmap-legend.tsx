import React from "react";
import { DragSource, DragSourceCollector, DragSourceSpec } from "react-dnd";

const Types = {
    heatmap: "heatmap",
};

type Props = {
    id?: string;
};

type CollectedProps = {
    connectDragSource: Function;
    isDragging: boolean;
};

const heatMapSource: DragSourceSpec<Props, Props> = {
    beginDrag(props) {
        return {
            id: props.id,
        };
    },

    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            return;
        }

        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();
    },
};

const heatMapCollect: DragSourceCollector<CollectedProps> = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    };
};

const HeatMapLegend: React.FC<Props & CollectedProps> = (props) => {
    return props.connectDragSource(
        <div>a value prop to change the chart randomly</div>,
    );
};

export default DragSource(Types.heatmap, heatMapSource, heatMapCollect)(HeatMapLegend);
