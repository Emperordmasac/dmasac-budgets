const types = {
    GET_ENTRIES: "GET_ENTRIES",
    POPULATE_ENTRIES: "POPULATE_ENTRIES",
    POPULATE_ENTRIES_VALUES: "POPULATE_ENTRIES_VALUES",
    ADD_ENTRY: "ADD_ENTRY",
    REMOVE_ENTRY: "REMOVE_ENTRY",
    UPDATE_ENTRY: "UPDATE_ENTRY",
    REMOVE_ENTRY_RESULT: "REMOVE_ENTRY_RESULT",
    ADD_ENTRY_RESULT: "ADD_ENTRY_RESULT",
};

export default types;

export const addEntryRedux = (payload) => {
    return { type: types.ADD_ENTRY, payload };
};

export const deleteEntryRedux = (id) => {
    return { type: types.REMOVE_ENTRY, payload: { id } };
};

export const updateEntryRedux = (id, entry) => {
    return { type: types.UPDATE_ENTRY, payload: { id, entry } };
};

export const getAllEntries = () => {
    return { type: types.GET_ENTRIES };
};

export const populateEntries = (enteries) => {
    return { type: types.POPULATE_ENTRIES, payload: enteries };
};

export const populateEntriesValues = (id, entry) => {
    return { type: types.POPULATE_ENTRIES_VALUES, payload: { id, entry } };
};
