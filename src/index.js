import React from "react";
import { createRoot } from 'react-dom/client';
import "./App.css"
import App from "./App";
import { Provider } from 'react-redux';

import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { launchesReducer } from './store/reducer/launchesReducer';
import rootSaga from './store/sagas/sagas';


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  launchesReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App/>
  </Provider>
)