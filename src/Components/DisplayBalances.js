import React from "react";
import { Segment, Grid } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function DisplayBalances({ incomeTotal, expenseTotal }) {
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
                            value={incomeTotal}
                            style={{ textAlign: "left" }}
                        />
                    </Grid.Column>

                    {/* Expenses */}
                    <Grid.Column>
                        <DisplayBalance
                            size="tiny"
                            color="red"
                            label="Expenses:"
                            value={expenseTotal}
                            style={{ textAlign: "left" }}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
}

export default DisplayBalances;
