import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/home';
import Quote from './components/quote';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="headline">
          <h1>Math Magician</h1>
          <div id="navbar">
            <div className="navlink">
              <Link to="/">Home</Link>
            </div>
            <div className="navlink">
              <Link to="/calculator">Calculator</Link>
            </div>
            <div className="navlink">
              <Link to="/quote">Quote</Link>
            </div>
          </div>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
