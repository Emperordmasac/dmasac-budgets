import { legacy_createStore as createStore, combineReducers } from "redux";
import entriesReducers from "../Reducers/entries.reducers";

export default () => {
    return createStore(
        combineReducers({
            entries: entriesReducers,
        })
    );
};
