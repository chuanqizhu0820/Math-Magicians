import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Calculator from './components/calculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/calculator">Calculator</Link>
        </div>
        <div>
          <Link to="/quote">Quote</Link>
        </div>

        <hr />

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

function Home() {
  return (<h1>Home page</h1>);
}

function Quote() {
  return (<h1>Quote page</h1>);
}
