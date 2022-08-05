import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
} from "redux";
import entriesReducers from "../Reducers/entries.reducers";
import modalsReducer from "../Reducers/modals.reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
// import { initSagas } from "../sagas";
import { testSaga } from "../sagas/testSaga";

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];
const storeConfig = () => {
    const store = createStore(
        combineReducers({
            entries: entriesReducers,
            modals: modalsReducer,
        }),
        composeWithDevTools(applyMiddleware(...middleWares))
    );
    // initSagas(sagaMiddleware);'
    sagaMiddleware.run(testSaga);
    return store;
};

export default storeConfig;
