import React, {useEffect} from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import { auth } from "./Firebase";
import { useStateValue } from './StateProvider';
 import Image from "./Image";


function App() {
  const[{},dispatch] = useStateValue()
  useEffect(()=>{
        auth.onAuthStateChanged(authUser =>{
          console.log('The user auth is', authUser);

          if(authUser){
              dispatch({
                type: "SET_USER",
                user: authUser
              })
          }else{
            dispatch({
              type:'SET_USER',
              user:null
            })

          }
        })
  },[])
  return (
    <div className="App">
      <Router>
      
        <Switch>
        <Route path='/Image'>
             {/* <Header /> */}
             <Image />
          </Route>
          <Route path='/Login'>
             <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
