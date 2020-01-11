import React, {Component} from 'react';
import Home from './Components/Home/HomePage.js';
import Add from './Components/AddMeal/AddMeal.js'
import SignUp from './Components/signUp';
import LoggedPage from './Components/loggedIn/loggedPage.js';
import {Router, Switch, BrowserRouter, Route} from 'react-router-dom'; 
import Login from './Components/login';
import * as firebase from 'firebase';



  class App extends Component{

    componentWillMount(){


      firebase.auth().onAuthStateChanged((user) =>{
        let pathname = window.location.pathname
        if (user &&pathname =='/Login') {
          console.log("user" , user , user.uid)
          window.location.pathname = '/'
        } else {
          console.log("not logged in ")
        }
      });


    }
  render(){
  return (
    <div className="App">
      <BrowserRouter>

      
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path='/add' component={Add}/>
        <Route path="/SignUp" component={SignUp}/>
        <Route path="/Login" component={Login}/>
        <Route path="/loggedPage" component={LoggedPage}/>

      </Switch>
      
      </BrowserRouter>
  

    </div>
  );}
}

export default App;
