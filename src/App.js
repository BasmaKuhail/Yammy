import React, {Component} from 'react';
import Home from './Components/Home/HomePage.js';
import Card from './Components/Home/CardHome'
import Add from './Components/Cheif/AddMeal.js'
import SignUp from './Components/login&signup/signUp';
import Login from './Components/login&signup/login';
import Cheif from './Components/Cheif/CheifHomePage';
import Meal from './Components/Cheif/meal.js';
import MyMeals from './Components/Cheif/MyMeals';
import User from './Components/User/UserHomePage';
import Favourite from './Components/User/favourite';
import Cards from './Components/Card/Card'
import {BrowserRouter} from 'react-router-dom';  
import {Route, Switch} from 'react-router-dom';
import * as firebase from 'firebase';
import { AuthProvider } from "./Auth";
import favouriteChef from './Components/Cheif/favouriteChef'
import PrivateRoute from "./PrivateRoute";

class App extends Component{

  componentWillMount(){
    firebase.auth().onAuthStateChanged((user) =>{
      let pathname = window.location.pathname
      if (user &&pathname =='/Login') {
        console.log("user" , user , user.uid)
       // window.location.pathname = '/'
      } else {
        console.log("not logged in ")
      }
    });


  }

  render(){
    return (
      <div className="App">
        <AuthProvider>

          <BrowserRouter>
            <Switch>
              <Route  path="/" component={Home} exact/>
              <Route path='/Cards' component={Cards}/>
              <Route path='/Card' component={Card}/>
              <Route path='/add' component={Add}/>
              <Route path="/SignUp" component={SignUp}/>
              <Route path="/Login" component={Login}/>
              <Route path="/cheif" component={Cheif}/>
              <Route path="/meal" component={Meal}/>
              <Route path='/myMeals' component={MyMeals}/>
              <Route path='/user' component={User}/>
              <Route path='/favourite' component={Favourite}/>
              <Route path='/favouriteChef' component={favouriteChef}/>

            </Switch>
          
          </BrowserRouter>

        </AuthProvider>

      </div>
  );}
}
export default App;
