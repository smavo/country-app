import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import "./assets/CSS/App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        <Switch>
          <Route path='/' />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
