export default (state = initialEntries, action) => {
    switch (action.type) {
        case "ADD_ENTRY":
            const newEntries = state.concat({ ...action.payload });
            return newEntries;

        case "REMOVE_ENTRY":
            const editedEntries = state.filter(
                (entry) => entry.id !== action.payload.id
            );
            return editedEntries;
        default:
            return state;
    }
};

var initialEntries = [
    {
        id: 1,
        description: "Work income",
        value: 1000.0,
        isExpense: false,
    },
    {
        id: 2,
        description: "Water bill",
        value: 20.0,
        isExpense: true,
    },
    {
        id: 3,
        description: "Rent",
        value: 300.0,
        isExpense: true,
    },
    {
        id: 4,
        description: "Power bill",
        value: 50.0,
        isExpense: true,
    },
];
