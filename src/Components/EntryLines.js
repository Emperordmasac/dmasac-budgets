import React from "react";
import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

function EntryLines({ enteries, editEntry }) {
    return (
        <Container>
            {enteries.map((entry) => (
                <EntryLine key={entry.id} {...entry} editEntry={editEntry} />
            ))}
        </Container>
    );
}

export default EntryLines;
