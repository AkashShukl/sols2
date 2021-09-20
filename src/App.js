import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import "./App.css";
import Counter from "./components/Counter";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home/:username?">
            <Home />
          </Route>

          <Route path="/counter">
            <Counter defaultValue={5}/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
