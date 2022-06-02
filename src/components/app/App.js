import Home from '../home/Home';
import SignUp from '../sign-up/SignUp';
import SignIn from '../sign-in/SignIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
