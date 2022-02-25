import './App.css';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Menu from './Menu';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact render={props => (<Login {...props} />)}></Route>
          <Route path='/Menu' exact render={props => (<Menu {...props} />)}></Route>
        </Switch>
      </Router>
    </>


  );
}

export default App;
