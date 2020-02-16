// imports
import React from "react";
import ReactDOM from "react-dom";
import { Provider as StoreProvider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

// local imports
import App from "./App";
import reducers from './reducers';

const main = () => (
    <StoreProvider
      store={createStore(
        reducers,
        {},
        compose(
          applyMiddleware(ReduxThunk),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
      )}
    >
      <App />
    </StoreProvider>
  );

ReactDOM.render(main(), document.querySelector("#root"));
