import React from 'react';
import Home from './Components/Home/HomePage.js';
import Add from './Components/Cheif/AddMeal.js'
import SignUp from './Components/login&signup/signUp';
import Login from './Components/login&signup/login';
import Cheif from './Components/Cheif/CheifHomePage';
import Meal from './Components/Cheif/meal.js';
import MyMeals from './Components/Cheif/MyMeals';
import User from './Components/User/UserHomePage';
import Favourite from './Components/User/favourite';
import {BrowserRouter} from 'react-router-dom';  
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/add' component={Add}/>
        <Route path="/SignUp" component={SignUp}/>
        <Route path="/Login" component={Login}/>
        <Route path="/cheif" component={Cheif}/>
        <Route path="/meal" component={Meal}/>
        <Route path='/myMeals' component={MyMeals}/>
        <Route path='/user' component={User}/>
        <Route path='/favourite' component={Favourite}/>
      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
