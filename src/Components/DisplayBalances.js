import React from "react";
import { Segment, Grid } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function DisplayBalances() {
    return (
        <Segment textAlign="center">
            <Grid columns={2} divided>
                <Grid.Row>
                    {/* Income */}
                    <Grid.Column>
                        <DisplayBalance
                            size="tiny"
                            color="green"
                            label="Income:"
                            value="1, 045.50"
                            style={{ textAlign: "left" }}
                        />
                    </Grid.Column>

                    {/* Expenses */}
                    <Grid.Column>
                        <DisplayBalance
                            size="tiny"
                            color="red"
                            label="Expenses:"
                            value="623.50"
                            style={{ textAlign: "left" }}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
}

export default DisplayBalances;
