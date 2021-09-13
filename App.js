import React, {useEffect}from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Checkout from './Checkout';
import { auth } from './firebase';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { useStateValue } from './Stateprovider';

function App() {
  const[{},dispatch]=useStateValue();

    useEffect(() => {
      //only one
      auth.onAuthStateChanged(authUser=>{
        console.log("the user",authUser);

        if(authUser)
        {
          //user in
              dispatch({
                type:"SET_USER",
                user:authUser
              })
            }
        else
        {
          dispatch({
            type:"SET_USER",
            user:null
          })
        }
      })
    }, [])
  return (
    //BEM
    <Router>
    <div className="app">
      
    
      <Switch>
      
              <Route path="/checkout">
                < Header/>
                  <Checkout/>
              </Route>

              <Route path="/login">
                <Login/>
              </Route>

              <Route path="/">
              < Header/>
                <Home/>
              </Route>

      </Switch>

      
     
    </div>
    </Router>
  );
}

export default App;
