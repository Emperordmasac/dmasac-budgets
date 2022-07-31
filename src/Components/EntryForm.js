import React from "react";
import { Form, Segment, Checkbox } from "semantic-ui-react";

function EntryForm({
    setValue,
    setDescription,
    description,
    value,
    isExpense,
    setIsExpense,
}) {
    return (
        <>
            <Form.Group>
                <Form.Input
                    placeholder="New Shinny Thing"
                    icon="tags"
                    width={12}
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Form.Input
                    width={4}
                    label="Value"
                    placeholder="100.00"
                    icon="dollar"
                    iconPosition="left"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                ></Form.Input>
            </Form.Group>
            <Segment compact>
                <Checkbox
                    label="Is Expense"
                    toggle
                    checked={isExpense}
                    onChange={() => setIsExpense((oldState) => !oldState)}
                />
            </Segment>
        </>
    );
}

export default EntryForm;
