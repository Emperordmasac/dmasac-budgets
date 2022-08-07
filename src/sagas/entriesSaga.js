import { take, put, fork, call, takeLatest } from "redux-saga/effects";
import entryTypes, {
    populateEntriesValues,
    populateEntries,
} from "../actions/entries.actions";
import axios from "axios";

export function* getAllEntries() {
    yield take(entryTypes.GET_ENTRIES);
    console.log("I need to get the files nwww");
    const { data } = yield axios.get("http://localhost:5000/entries");
    yield put(populateEntries(data));
}

export function* getEntryDetails(id) {
    const { data } = yield call(axios, `http://localhost:5000/values/${id}`);
    console.log(data);
    yield put(populateEntriesValues(id, data));
    // yield put({
    //     type: entryTypes.POPULATE_ENTRIES_VALUES,
    //     payload: { id, entry: data },
    // });
}

export function* getAllEntryDetails() {
    const { payload } = yield take(entryTypes.POPULATE_ENTRIES);
    for (let i = 0; i < payload.length; i++) {
        const entry = payload[i];
        yield fork(getEntryDetails, entry.id);
    }
}

export function* deleteEntrySaga() {
    while (true) {
        const { payload } = yield take(entryTypes.REMOVE_ENTRY);
        yield call(deleteEntries, payload.id);
        yield put({ type: "REMOVE_ENTRY_RESULT", payload: { id: payload.id } });
    }
}

async function deleteEntries(id) {
    await axios.delete(`http://localhost:5000/entries/${id}`);
    await axios.delete(`http://localhost:5000/values/${id}`);
}

export function* addEntrySaga() {
    yield takeLatest(entryTypes.ADD_ENTRY, addEntryToDB);
}

function* addEntryToDB({ payload }) {
    yield call(addEntry, payload);
    yield call(addValues, payload);
    yield put({ type: entryTypes.ADD_ENTRY_RESULT, payload });
}

async function addEntry({ id, description }) {
    await axios.post("http://localhost:5000/entries", { id, description });
}

async function addValues({ id, isExpense, value }) {
    await axios.post("http://localhost:5000/values", { id, isExpense, value });
}
