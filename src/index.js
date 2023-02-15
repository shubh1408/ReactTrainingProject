import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutUs from './Components/AboutUs';
import reportWebVitals from './reportWebVitals';
import SubmitForm from './Components/SubmitForm';
import { Route, Link, Routes, BrowserRouter as Router, Switch } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link exact to="/"><a class="navbar-brand" href="#">Online Shopping</a></Link>
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to="/aboutUs"> <a class="nav-link" href="#">About Us</a></Link>
          </li>
          <li class="nav-item">
            <Link to='/products'><a class="nav-link" href="#">Products</a></Link>
          </li>
          <li class="nav-item">
            <Link to="/offers"><a class="nav-link" href="#">Offers</a></Link>
          </li>
        </ul>
        <SubmitForm />

      </nav>
    </div>
    <br></br>

    <Switch>

      <Route exact path="/" component={App} ></Route>
      <Route path="/AboutUs" component={AboutUs}></Route>
    </Switch >

  </Router>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
