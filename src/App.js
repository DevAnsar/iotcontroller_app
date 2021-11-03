
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import Loging from "./views/Login";
import Controllers from './views/Controllers';
import Register from './views/Register';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <div className="container">

        <Switch>
          <Route path="/">
            <Controllers />
          </Route>
          <Route path="/login">
            <Loging />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>

        </div>
      </header>
    </div>
  );
}

export default App;
