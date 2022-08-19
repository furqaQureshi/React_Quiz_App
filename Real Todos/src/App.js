import React from "react";
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import "./App.css";
import Quiz from "./Component/Quiz";
import Start from "./Component/Start";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Start}></Route>
          <Route exact path="/start" component={Quiz}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
