import React, {Component} from 'react';
import Cards from '../Home/CardHome';

class MyMeals extends Component{
    render(){
        return(
            <div>
                <h1>My Meals</h1>

                <Cards {...this.props}/>


            </div>
        )
    }
}

export default MyMeals;