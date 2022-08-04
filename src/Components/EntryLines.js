import React from "react";
import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

function EntryLines({ enteries }) {
    return (
        <Container>
            {enteries.map((entry) => (
                <EntryLine key={entry.id} {...entry} />
            ))}
        </Container>
    );
}

export default EntryLines;
