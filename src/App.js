import About from "./pages/About";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import './App.css';

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
      </Switch>
    </Router>
  );
}
export default App;
