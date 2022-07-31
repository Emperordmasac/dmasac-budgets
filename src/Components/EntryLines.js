import React from "react";
import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

function EntryLines({ enteries, deleteEntry, editEntry }) {
    return (
        <Container>
            {enteries.map((entry) => (
                <EntryLine
                    key={entry.id}
                    {...entry}
                    deleteEntry={deleteEntry}
                    editEntry={editEntry}
                />
            ))}
        </Container>
    );
}

export default EntryLines;
