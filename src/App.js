import React from 'react';
import Home from './Components/Home/HomePage.js';
import Add from './Components/AddMeal/AddMeal.js'
import {BrowserRouter} from 'react-router-dom';  
import {Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/add' component={Add}/>

      </Switch>
      </BrowserRouter>
   

    </div>
  );
}

export default App;
