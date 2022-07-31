import React from "react";
import { Statistic } from "semantic-ui-react";

function DisplayBalance({ size, label, value, color }) {
    return (
        <Statistic size={size} color={color}>
            <Statistic.Label>{label}</Statistic.Label>
            <Statistic.Value>{value}</Statistic.Value>
        </Statistic>
    );
}

export default DisplayBalance;
