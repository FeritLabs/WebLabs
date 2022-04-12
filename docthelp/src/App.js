


import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Prijava from './Prijava';
import Pocetna from './Pocetna';
 
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
              <ul className="App-header">
                <li>
                  <Link to="/">Pocetna</Link>
                </li>
                <li>
                  <Link to="/prijava">Prijava</Link>
                </li>
              </ul>
            <Routes>
                  <Route exact path='/' element={<Pocetna />}></Route>
                  <Route exact path='/prijava' element={<Prijava />}></Route>
            </Routes>
          </div>
       </Router>
   );
  }
}
 
export default App;
