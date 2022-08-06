import { take, put, fork, call } from "redux-saga/effects";
import entryTypes from "../actions/entries.actions";
import axios from "axios";

export function* getAllEntries() {
    yield take(entryTypes.GET_ENTRIES);
    console.log("I need to get the files nwww");
    const result = yield axios.get("http://localhost:5000/entries");
    console.log(result);
    yield put({ type: entryTypes.POPULATE_ENTRIES, payload: result.data });
}

export function* getEntryDetails(id) {
    const { data } = yield call(axios, `http://localhost:5000/values/${id}`);
    console.log(data);
    yield put({
        type: entryTypes.POPULATE_ENTRIES_VALUES,
        payload: { id, entry: data },
    });
}

export function* getAllEntryDetails() {
    const { payload } = yield take(entryTypes.POPULATE_ENTRIES);
    for (let i = 0; i < payload.length; i++) {
        const entry = payload[i];
        yield fork(getEntryDetails, entry.id);
    }
}
