import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './reducers';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);

export default store;
