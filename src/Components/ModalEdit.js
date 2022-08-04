import React from "react";
import { Button, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";
import { useDispatch } from "react-redux";
import { closeEditModal } from "../actions/modals.actions";
import useEntryDetails from "../hooks/useEntryDetails";

function ModalEdit({ isOpen, description, value, isExpense, id }) {
    const dispatch = useDispatch();
    const entryUpdate = useEntryDetails(description, value, isExpense);
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit entry</Modal.Header>
            <Modal.Content>
                <EntryForm
                    description={entryUpdate.description}
                    value={entryUpdate.value}
                    isExpense={entryUpdate.isExpense}
                    setValue={entryUpdate.setValue}
                    setDescription={entryUpdate.setDescription}
                    setIsExpense={entryUpdate.setIsExpense}
                />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => dispatch(closeEditModal())}>
                    Close
                </Button>
                <Button primary onClick={() => entryUpdate.updateEntry(id)}>
                    Ok
                </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default ModalEdit;
