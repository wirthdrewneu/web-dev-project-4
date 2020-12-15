import React, { useState, useEffect } from "react" ;
import './App.css';
import NavBar from "./components/NavBar.js";
import AptTable from "./components/AptTable.js";
// import History from "./History.js";
import AptCloud from './components/AptCloud.js';
import PersCard from './components/PersCard.js';
import Login from './components/Login.js';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  //  Link
} from "react-router-dom";


function App() {

  // const [show, setShow] = useState(true);
  const [apartments, setapartments] = useState([]);
  const getApt = async () => {
    console.log("getting Apartments");
    try {
      const _apartments = await fetch("/calendar").then((res) => res.json());
      console.log("got posts", _apartments);
      setapartments(_apartments);
    } catch (err) {
      console.log("error ", err);
    }
  };

  useEffect(() => {
    getApt();
  }, [])  




  const [user, setUser] = useState(null);

  function getUser() {
    fetch("/getUser")
      .then((res) => res.json())
      .then((_user) => {
        if (_user.username) setUser(_user.username);
      });
  }

  useEffect(getUser, []);


console.log("User Name", user);

  return (
    <div className="App" >
    <NavBar user = {user}></NavBar>
    <Router>
        <Switch>
          <Route path="/perslist">
            <PersCard></PersCard> 
          </Route>
        <Route path="/login">
             <Login  ></Login>
        </Route>
          <Route path="/">
             <AptCloud apartments = {apartments}/> 
            <AptTable apartments = {apartments}/>
        </Route>

         



        </Switch>
    </Router>
    
    

    </div>
  );
}

export default App;

