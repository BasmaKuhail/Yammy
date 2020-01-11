import React, {Component} from 'react';
import Home from './Components/Home/HomePage.js';
import Add from './Components/Cheif/AddMeal.js'
import SignUp from './Components/login&signup/signUp';
import Login from './Components/login&signup/login';
import Cheif from './Components/Cheif/CheifHomePage'
import Meal from './Components/Cheif/meal.js'
import {BrowserRouter} from 'react-router-dom';  
import {Route, Switch} from 'react-router-dom';
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
        {/* <Route path="/loggedPage" component={LoggedPage}/> */}

        <Route path="/cheif" component={Cheif}/>
        <Route path="/meal" component={Meal}/>
      </Switch>
      
      </BrowserRouter>

    </div>
  );}
}

export default App;
