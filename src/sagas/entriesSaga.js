import { take, put } from "redux-saga/effects";
import entryTypes from "../actions/entries.actions";
import axios from "axios";

export function* getAllEntries() {
    yield take(entryTypes.GET_ENTRIES);
    console.log("I need to get the files nwww");
    const result = yield axios.get("http://localhost:5000/entries");
    console.log(result);
    yield put({ type: entryTypes.POPULATE_ENTRIES, payload: result.data });
}
