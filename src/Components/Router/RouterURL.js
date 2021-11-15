import { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
import About from '../About/About';
import Contact from '../Contact/Contact';
import Document from '../Document/Document';
import Home from '../Home/Home';
import Service from '../Service/Service';

class RouterURL extends Component {
 render() {

  return (
    
      <div>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/gioithieu">
            <About></About>
          </Route>
          <Route path="/dichvu">
            <Service></Service>
          </Route>
          <Route path="/tailieu">
            <Document></Document>
          </Route>
          <Route path="/lienhe">
            <Contact></Contact>
          </Route>
        </Switch>

      </div>
    
  );
 }
}

export default RouterURL;
