import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from './assets/JS/reducer';

import "./assets/CSS/App.css";

import Header from "./Components/Header";
import CountryList from './Components/CountryList';
import ActionList from './Components/ActionList';

import CountryPage from './Components/CountryPage';

const initialState = {
  error: "",
  country: [],
  countryList: [],
  countryListByRegion: [],
  countryListByName: [],
  countryListFilter: [],
  region: "none",
  name: "",
};

const store = createStore(reducer, initialState);

function App() {
  /*  Darkmode - LigthMode*/
  const [darkMode, setDarkMode] = useState(false);
  const [checked, setChecked] = useState(false);
  const mainClass = darkMode ? "is__darkmode" : "is__ligthmode";

  function changeMedia(mq) {
    setDarkMode(mq.matches);
    setChecked(mq.matches);
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(changeMedia);
    setDarkMode(mq.matches);
    setChecked(mq.matches);
  }, []);

  return (
    <main className={mainClass}>
      <Provider store={store}>
        <Router>
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />
          <Switch>
            <Route path="/country/:id" component={CountryPage} />
            <Route path='/'>
              <ActionList />
              <CountryList />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </main>
  );
}

export default App;
