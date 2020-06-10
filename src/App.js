import React, {Component} from 'react';
import Home from './Components/Home/HomePage.js';
import Card from './Components/Home/CardHome'
import AboutUs from './Components/Home/aboutus'
import SignUp from './Components/login&signup/signUp';
import Login from './Components/login&signup/login';
import Cheif from './Components/Cheif/CheifHomePage';
import Meal from './Components/Cheif/meal.js';
import MyMeals from './Components/Cheif/MyMeals';
import User from './Components/User/UserHomePage';
import Favourite from './Components/User/favourite';
import AddMeal from './Components/Cheif/add';
import Cards from './Components/Card/Card';
import {BrowserRouter} from 'react-router-dom';  
import {Route, Switch} from 'react-router-dom';
import * as firebase from 'firebase';
import { AuthProvider } from "./Auth";
import favouriteChef from './Components/Cheif/favouriteChef'
import PrivateRoute from "./PrivateRoute";
import EatTime from "./Components/eattime";
import Region from "./Components/region";

import Vegan from "./Components/vegan";
import Type from "./Components/type";
import Occasion from './Components/occasion'
import Result from "./Components/result";
import Catigories from "./Components/catigories";
import ChefLayOut from "./Components/chefLayOut";
import UserLayOut from "./Components/userLayOut";



class App extends Component{

  // componentWillMount(){
  //   firebase.auth().onAuthStateChanged((user) =>{
  //     let pathname = window.location.pathname
  //     if (user &&pathname =='/Login') {
  //       console.log("user" , user , user.uid)
  //      // window.location.pathname = '/'
  //     } else {
  //       console.log("not logged in ")
  //     }
  //   });


  // }

  render(){
    return (
      <div className="App">
        <AuthProvider>

          <BrowserRouter>
            <Switch>
              <Route  path="/" component={Home} exact/>
              <PrivateRoute  path="/ChefLayOut" component={ChefLayOut} />
              <PrivateRoute  path="/userLayOut" component={UserLayOut} />
              <PrivateRoute path='/Cards' component={Cards}/>
              <Route path='/Card' component={Card}/>
              <Route path='/eatTime' component={EatTime}/>
              <Route path='/region' component={Region}/>
              <Route path='/occasion' component={Occasion}/>
              <Route path='/about' component={AboutUs}/>
              <Route path='/vegan' component={Vegan}/>
              <Route path='/type' component={Type}/>
              <Route path='/result' component={Result}/>
              <PrivateRoute path='/add' component={AddMeal}/>
              <Route path="/SignUp" component={SignUp}/>
              <Route path="/Login" component={Login}/>
              <PrivateRoute path="/cheif" component={Cheif}/>
              <Route path="/meal" component={Meal}/>
              <PrivateRoute path='/myMeals' component={MyMeals}/>
              <PrivateRoute path='/user' component={User}/>
              <PrivateRoute path='/favourite' component={Favourite}/>
              <PrivateRoute path='/favouriteChef' component={favouriteChef}/>

            </Switch>
          
          </BrowserRouter>

        </AuthProvider>

      </div>
  );}
}
export default App;
