import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import "./App.css";
import FormContainer from "./components/form/FormContainer";
import reducers from "./reducers";

const middleware = [thunk];

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const App = () => {
  return (
    <Provider store={store}>
      <div className="main-wrapper">
        <FormContainer />
      </div>
    </Provider>
  );
};

export default App;
