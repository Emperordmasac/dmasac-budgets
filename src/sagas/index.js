import * as testSaga from "./testSaga";

export function initSagas(sagaMiddleware) {
    Object.values(testSaga).forEach(sagaMiddleware.bind(sagaMiddleware));
}
