import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
import { ADD_LETTER, LETTERS_LOADING } from "./actions/types";
import MainWrapper from "./components/MainWrapper";

const middleware = [thunk];
const store = createStore(reducers, compose(applyMiddleware(...middleware)));

//If any letters in local storage
//Send requests to check letters status
if (localStorage.letters) {
  const sendsay = new window.Sendsay({
    auth: {
      login: "daniil2305@yandex.ru",
      password: "xoo4Yav"
    }
  });

  store.dispatch({ type: LETTERS_LOADING });
  const letters = JSON.parse(localStorage.letters);
  for (let letter of letters) {
    sendsay
      .request({
        action: "track.get",
        id: letter["track.id"],
        session: "session"
      })
      .then(res => {
        store.dispatch({
          type: ADD_LETTER,
          payload: {
            date: res.obj.dt,
            subject: letter.subject,
            status: res.obj.status
          }
        });
      });
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <MainWrapper />
    </Provider>
  );
};

export default App;
