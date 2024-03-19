import React from 'react';
import useState from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import "./styles/index.css";
import "./styles/hamburgers.min.css";
import About from "./view/About";
import Login from "./view/Login/Login";
import Home from "./view/Home/Home";


const isLoggedIn = sessionStorage.getItem('auth');

ReactDOM.render(  
  <React.StrictMode>
    <Router>
      <Routes>
    
      {isLoggedIn==true ? (
       <Route path="/" element={<Home />} />
      ) : (
        <Route path="/" element={<Login />} />
      )}
        
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);


/*ReactDOM.render(  
  <Router>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/Login" component={Login} />
      </Routes>
  </Router>,
  document.getElementById("root")
);*/


/*ReactDOM.render(  
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/About" component={About} exact />
        <Route path="/Login" component={Login} exact />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);*/


