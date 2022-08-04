import { legacy_createStore as createStore, combineReducers } from "redux";
import entriesReducers from "../Reducers/entries.reducers";
import modalsReducer from "../Reducers/modals.reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const storeConfig = () => {
    return createStore(
        combineReducers({
            entries: entriesReducers,
            modals: modalsReducer,
        }),
        composeWithDevTools()
    );
};

export default storeConfig;
