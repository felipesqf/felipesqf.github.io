import About from "./pages/About";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Route, Switch } from 'react-router-dom';
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import './App.css';

function App() {
  return (
    <Switch>
          <Route exact path="/" component={About}/>
          <Route path="/experience" component={Experience}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/portfolio" component={Portfolio}/>
    </Switch>
  );
}
export default App;

