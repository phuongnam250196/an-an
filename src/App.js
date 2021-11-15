import './App.css';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import RouterURL from './Components/Router/RouterURL';


class App extends Component {
 render() {
  return (
    // <Router>
    // <div>
    //   <Header></Header>
      
    //   <RouterURL></RouterURL>
      
    //   <Footer></Footer>
    // </div>
    // </Router>
    
      <Router>
        <Header></Header>
        <RouterURL></RouterURL>
        <Footer></Footer>
      </Router>
    
  );
 }
}

export default App;
