import React from 'react';
import { createContext, useContext, useMemo } from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router, Route, Link, Routes} from 'react-router-dom';
//import {BrowserRouter as Router, Route, Link, Routes , Switch, useHistory} from 'react-router-dom';
//import {BrowserRouter as Router, Route, Link, Routes, Navigate} from 'react-router-dom';
import About from "./view/About";
import Login from "./view/Login/Login";
import Home from "./view/Home/Home";


const AuthContext = createContext();
const isLoggedIn = sessionStorage.getItem('auth');
//const [token, setToken] = useState();

let Master;
if (isLoggedIn) {
  Master = <Route path="/" element={<Home />} />
}else{
  Master = <Route path="/" element={<Login />} />
}

ReactDOM.render(  
  <React.StrictMode>
    <Router>
      <Routes>  
        {isLoggedIn ? <Route path="/" element={<Home />} /> : <Route path="/" element={<Login />} />}
        <Route  path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

/* <Route path="/Home" element={<Home />} />  
<Route  exact path="/" element={isLoggedIn==true ? <Home /> : <Login />} /> {isLoggedIn==true ? <Route path="/" element={<Home />} /> : <Route path="/" element={<Login />} />}*/


